/**
 * Verify that setting a subset of scene events to track will only invoke the subset of events given
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
  if (state.updateCalled || state.preUpdateCalled) failTest();
  else if (state.postUpdateCalled) passTest();
}

export default class MainScene extends Phaser.Scene {
  create() {
    this.lifecycle.setEventsToTrack(["postUpdate"]);

    this.lifecycle.add({
      update: () => {
        state.updateCalled = true;
        updateTest();
      },
      preUpdate: () => {
        state.preUpdateCalled = true;
        updateTest();
      },
      postupdate: () => {
        state.postUpdateCalled = true;
        updateTest();
      }
    });
  }
}
