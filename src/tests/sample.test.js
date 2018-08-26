import Plugin from "../phaser-lifecycle-plugin";
import Scene from "../mocks/scene";

const emitUpdate = (scene, time, delta) => scene.events.emit("update", time, delta);
const emitPreUpdate = (scene, time, delta) => scene.events.emit("preupdate", time, delta);
const emitPostUpdate = (scene, time, delta) => scene.events.emit("postupdate", time, delta);
const emitStart = scene => scene.events.emit("start");
const emitShutdown = scene => scene.events.emit("shutdown");
const emitRender = scene => scene.events.emit("render");
const emitDestroy = scene => scene.events.emit("destroy");

describe("scene started with lifecycle plugin", () => {
  let scene;
  let plugin;

  beforeEach(() => {
    scene = new Scene();
    plugin = new Plugin(scene, {});
    scene.events.emit("boot");
    scene.sys.settings.isBooted = true;
    scene.events.emit("start");
  });

  test("adding an object without mapping should hook into method names that match scene event names", () => {
    const object = {
      preupdate: jest.fn(),
      update: jest.fn(),
      postupdate: jest.fn(),
      render: jest.fn(),
      destroy: jest.fn()
    };
    plugin.add(object);
    emitPreUpdate(scene);
    expect(object.preupdate.mock.calls.length).toBe(1);
    emitUpdate(scene);
    expect(object.update.mock.calls.length).toBe(1);
    emitPostUpdate(scene);
    expect(object.postupdate.mock.calls.length).toBe(1);
    emitRender(scene);
    expect(object.render.mock.calls.length).toBe(1);
    emitDestroy(scene);
    expect(object.destroy.mock.calls.length).toBe(1);
  });

  test("adding an object without mapping should hook into camel case method names that match scene events", () => {
    const object = {
      preUpdate: jest.fn(),
      postUpdate: jest.fn()
    };
    plugin.add(object);
    emitPreUpdate(scene);
    expect(object.preUpdate.mock.calls.length).toBe(1);
    emitPostUpdate(scene);
    expect(object.postUpdate.mock.calls.length).toBe(1);
  });

  test("adding an object with mapping should use the mapped methods for responding to scene events", () => {
    const object = {
      doTheUpdate: jest.fn(),
      debugRender: jest.fn(),
      kill: jest.fn()
    };
    const mapping = {
      update: object.doTheUpdate,
      render: object.debugRender,
      destroy: object.kill
    };
    plugin.add(object, mapping);
    emitUpdate(scene);
    expect(object.doTheUpdate.mock.calls.length).toBe(1);
    emitRender(scene);
    expect(object.debugRender.mock.calls.length).toBe(1);
    emitDestroy(scene);
    expect(object.kill.mock.calls.length).toBe(1);
  });

  test("adding an object should have the object as context in event listeners", () => {
    const object = {
      update: jest.fn(),
      kill: jest.fn()
    };
    const mapping = {
      update: object.update,
      destroy: object.kill
    };
    plugin.add(object, mapping);
    emitUpdate(scene);
    expect(object.update.mock.instances[0]).toBe(object);
    emitDestroy(scene);
    expect(object.kill.mock.instances[0]).toBe(object);
  });

  test("adding an object after restarting the scene should work", () => {
    emitShutdown(scene);
    emitStart(scene);
    const object = { update: jest.fn() };
    plugin.add(object);
    emitUpdate(scene);
    expect(object.update.mock.calls.length).toBe(1);
  });
});

describe("scene started with lifecycle plugin with custom set of scene events to track", () => {
  let scene;
  let plugin;

  beforeEach(() => {
    scene = new Scene();
    plugin = new Plugin(scene, {});
    scene.events.emit("boot");
    scene.sys.settings.isBooted = true;
    scene.events.emit("start");
  });

  test("after setting update as the only event to track, only update should be triggered", () => {
    plugin.setEventsToTrack(["update"]);
    const object = { update: jest.fn(), preupdate: jest.fn() };
    plugin.add(object);
    emitPreUpdate(scene);
    expect(object.preupdate.mock.calls.length).toBe(0);
    emitUpdate(scene);
    expect(object.update.mock.calls.length).toBe(1);
  });

  test("adding object before setting events to track should only trigger events that are tracked", () => {
    const object = { update: jest.fn(), preupdate: jest.fn() };
    plugin.add(object);
    plugin.setEventsToTrack(["update"]);
    emitPreUpdate(scene);
    expect(object.preupdate.mock.calls.length).toBe(0);
    emitUpdate(scene);
    expect(object.update.mock.calls.length).toBe(1);
  });
});
