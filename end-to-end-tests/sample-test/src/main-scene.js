/**
 * Verify that the matterCollision's addOnCollideStart, addOnCollideActive and addOnCollideEnd fire
 * correctly for GO vs GO collisions. Three objects are created and only collisions between two of
 * them should fire.
 */

import Phaser from "phaser";
import { startTest, failTest, passTest } from "../../test-utils";

startTest();
const state = {
  updateCalled: false,
  preUpdateCalled: false,
  postUpdateCalled: false
};
function updateTest() {
  if (state.updateCalled && state.preUpdateCalled && state.postUpdateCalled)
    passTest();
}

export default class MainScene extends Phaser.Scene {
  create() {
    this.lifecycle.add({
      update: () => {
        state.updateCalled = true;
        updateTest();
      },
      preUpdate: () => {
        state.preUpdateCalled = true;
        updateTest();
      },
      postUpdate: () => {
        state.postUpdateCalled = true;
        updateTest();
      }
    });
  }
}
