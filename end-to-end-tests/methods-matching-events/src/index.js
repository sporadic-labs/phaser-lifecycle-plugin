import Phaser from "phaser";
import PhaserLifecyclePlugin from "../../../src";
import MainScene from "./main-scene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000c1f",
  parent: "game-container",
  pixelArt: true,
  scene: MainScene,
  plugins: {
    scene: [
      {
        key: "lifecycle",
        plugin: PhaserLifecyclePlugin,
        mapping: "lifecycle"
      }
    ]
  }
};

const game = new Phaser.Game(config);
