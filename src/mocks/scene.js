import EventEmitter from "eventemitter3";

export default class Scene {
  constructor() {
    this.events = new EventEmitter();

    this.sys = {
      events: this.events,
      settings: {
        isBooted: false
      }
    };
  }
}
