import Plugin from "../phaser-lifecycle-plugin";
import Scene from "../mocks/scene";

const emitUpdate = (scene, time, delta) => scene.events.emit("update", time, delta);
const emitPreUpdate = (scene, time, delta) => scene.events.emit("preupdate", time, delta);
const emitPostUpdate = (scene, time, delta) => scene.events.emit("postupdate", time, delta);

describe("scene started with lifecycle plugin", () => {
  let scene;
  let plugin;

  beforeEach(() => {
    scene = new Scene();
    plugin = new Plugin(scene, {});
    scene.events.emit("boot");
    scene.sys.settings.isBooted = true;
  });

  test("lifecycle object added with update, preUpdate and postUpdate methods should be invoked with scene events", () => {
    const object = { update: jest.fn(), preUpdate: jest.fn(), postUpdate: jest.fn() };
    plugin.add(object);
    emitPreUpdate(scene);
    expect(object.preUpdate.mock.calls.length).toBe(1);
    emitUpdate(scene);
    expect(object.update.mock.calls.length).toBe(1);
    emitPostUpdate(scene);
    expect(object.postUpdate.mock.calls.length).toBe(1);
  });
});
