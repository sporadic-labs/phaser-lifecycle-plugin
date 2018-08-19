// TODO:
// - add config option to add() to allow custom mapping to update/preupdate/postupdate
// - add priority/
// - docs
// - more tests

import Phaser from "phaser";

/**
 * Plugin that wraps around Phaser's event system. This allows us to avoid the issues around the
 * EventEmitter library Phaser uses where the EE caches the listeners at the start of an event. This
 * leads to bugs if a listener gets unsubscribed during an event (e.g. the physics system
 * unsubscribing a listener via a CB before the listener's update method). This plugin immediately
 * unsubscribes the listener.
 */
export default class LifecyclePlugin extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);

    this.scene = scene;
    this.systems = scene.sys;

    // Other events we could proxy:
    //  pause, resume, sleep, wake, resize, boot, start, transition
    const camelCaseEvents = ["update", "preUpdate", "postUpdate", "render", "destroy"];
    this.eventNames = camelCaseEvents.map(s => s.toLowerCase());
    this.possibleMethodNames = new Set([...camelCaseEvents, ...this.eventNames]);

    // A hashmap of listeners in the form: eventName => Map(object, method)
    this.listeners = {};
    this.eventNames.forEach(name => (this.listeners[name] = new Map()));

    // Create bound versions of each event handler
    this.eventHandlers = {};
    this.eventNames.forEach(
      name => (this.eventHandlers[name] = this.onSceneEvent.bind(this, name))
    );

    if (!scene.sys.settings.isBooted) this.systems.events.once("boot", this.boot, this);
  }

  boot() {
    const emitter = this.systems.events;
    emitter.on("shutdown", this.shutdown, this);
    emitter.on("start", this.start, this);
    emitter.once("destroy", this.destroy, this);
  }

  start() {
    const emitter = this.systems.events;
    this.eventNames.forEach(name => emitter.on(name, this.eventHandlers[name]));
  }

  onSceneEvent(eventName, ...args) {
    this.listeners[eventName].forEach((method, object) => method.apply(object, args));
  }

  add(object, eventMapping) {
    // No mapping given, default to checking for methods named after the event
    if (!eventMapping) {
      eventMapping = {};
      this.possibleMethodNames.forEach(methodName => {
        if (typeof object[methodName] === "function") {
          const eventName = methodName.toLowerCase();
          eventMapping[eventName] = object[methodName];
        }
      });
    }

    Object.entries(eventMapping).forEach(([eventName, method]) => {
      const listenerMap = this.listeners[eventName];
      if (listenerMap) listenerMap.set(object, method);
    });
  }

  remove(object) {
    this.eventNames.forEach(name => this.listeners[name].delete(object));
  }

  removeAll() {
    this.eventNames.forEach(name => this.listeners[name].clear());
  }

  shutdown() {
    this.removeAll();
    const emitter = this.systems.events;
    this.eventNames.forEach(eventName => {
      emitter.off(eventName, this.eventHandlers[eventName]);
    });
  }

  destroy() {
    if (this.eventHandlers["destroy"]) this.eventHandlers["destroy"]();
    const emitter = this.systems.events;
    emitter.off("shutdown", this.onShutdown, this);
    this.eventNames.forEach(eventName => {
      emitter.off(eventName, this.eventHandlers[eventName]);
    });
    this.removeAll();
  }
}
