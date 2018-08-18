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

    this.updateListeners = new Set();
    this.preUpdateListeners = new Set();
    this.postUpdateListeners = new Set();

    if (!scene.sys.settings.isBooted) this.systems.events.once("boot", this.boot, this);
  }

  boot() {
    const emitter = this.systems.events;
    emitter.on("update", this.onUpdate, this);
    emitter.on("preupdate", this.onPreUpdate, this);
    emitter.on("postupdate", this.onPostUpdate, this);
    emitter.on("shutdown", this.onShutdown, this);
    emitter.once("destroy", this.onDestroy, this);
  }

  onUpdate(...args) {
    this.updateListeners.forEach(obj => obj.update(...args));
  }

  onPreUpdate(...args) {
    this.preUpdateListeners.forEach(obj => obj.preUpdate(...args));
  }

  onPostUpdate(...args) {
    this.postUpdateListeners.forEach(obj => obj.postUpdate(...args));
  }

  onShutdown() {
    this.updateListeners.clear();
    this.preUpdateListeners.clear();
    this.postUpdateListeners.clear();
  }

  onDestroy() {
    const emitter = this.systems.events;

    emitter.off("update", this.onUpdate, this);
    emitter.off("preupdate", this.onPreUpdate, this);
    emitter.off("postupdate", this.onPostUpdate, this);
    emitter.off("shutdown", this.onShutdown, this);

    this.updateListeners.clear();
    this.preUpdateListeners.clear();
    this.postUpdateListeners.clear();
  }

  add(obj) {
    if (obj.update) this.updateListeners.add(obj);
    if (obj.preUpdate) this.preUpdateListeners.add(obj);
    if (obj.postUpdate) this.postUpdateListeners.add(obj);
  }

  remove(obj) {
    this.updateListeners.delete(obj);
    this.preUpdateListeners.delete(obj);
    this.postUpdateListeners.delete(obj);
  }
}
