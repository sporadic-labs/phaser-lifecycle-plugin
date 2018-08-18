# Phaser Lifecycle Plugin

A Phaser 3 plugin to make it easier to have custom objects hook into Phaser's lifecycle events - preupdate, postupdate, etc.

Note: this plugin is still in progress and will be updated to an official release with docs soon!

TODO: insert small snippet example here.

Check out the HTML documentation [here](https://www.mikewesthad.com/phaser-matter-collision-plugin/docs/manual/README.html).

## Why

The plugin that wraps around Phaser's event system (which is based on EventEmitter3). This allows us to avoid the issues around the EventEmitter3 library where the event emitter caches the listeners at the start of an event. E.g. at the beginning of an "update" event, the array of listeners is cached. That leads to bugs if a listener gets unsubscribed during an event, a listener is destroyed during the physics system's update. That listener may still get invoked during update. This plugin immediately unsubscribes the listener.

## Installation

You can install this plugin globally as a script, or locally as a module using your bundler of choice.

### As a Script

You can drop in any of the transpiled code into your project as a standalone script. Choose the version that you want:

- [minified code](https://raw.githubusercontent.com/mikewesthad/phaser-lifecycle-plugin/master/dist/phaser-lifecycle-plugin.min.js) & optional [source map](https://raw.githubusercontent.com/mikewesthad/phaser-lifecycle-plugin/master/dist/phaser-lifecycle-plugin.min.js.map)
- [unminified code](https://raw.githubusercontent.com/mikewesthad/phaser-lifecycle-plugin/master/dist/phaser-lifecycle-plugin.js) & optional [source map](https://raw.githubusercontent.com/mikewesthad/phaser-lifecycle-plugin/master/dist/phaser-lifecycle-plugin.js.map)

E.g. if you wanted the minified code, you would add this to your HTML:

```html
<script src="phaser-lifecycle-plugin.min.js"></script>
```

Or use the jsdelivr CDN:

```html
<script src="//cdn.jsdelivr.net/npm/phaser-lifecycle-plugin"></script>
```

Now you can use the global `PhaserLifecyclePlugin`. See [usage](#usage) for how to use the plugin.

### As a Module

Install via npm:

```
npm install --save phaser-lifecycle-plugin
```

To use the transpiled and minified distribution of the library:

```js
import PhaserLifecyclePlugin from "phaser-lifecycle-plugin";
```

To use the raw library (so you can transpile it to match your own project settings):

```js
import PhaserLifecyclePlugin from "phaser-lifecycle-plugin/src";
```

See [usage](#usage) for how to use the plugin.

## Usage

### Initial Setup

When setting up your game config, add the plugin:

```js
const config = {
  // ...

  // Install the scene plugin
  plugins: {
    scene: [
      {
        plugin: PhaserLifecyclePlugin, // The plugin class
        key: "lifecycle", // Where to store in Scene.Systems, e.g. scene.sys.lifecycle
        mapping: "lifecycle" // Where to store in the Scene, e.g. scene.lifecycle
      }
    ]
  }
};

const game = new Phaser.Game(config);
```

Now, within a scene, you can use `this.lifecycle` to access the plugin instance.

### Usage in Scene

Within a scene, you can now:

```js
class CustomPlayer {
  update() {
    console.log("Update!");
  }
  preUpdate() {
    console.log("Before update!");
  }
  postUpdate() {
    console.log("After update!");
  }
}

const player = new CustomPlayer();
this.lifecycle.add(player);
```

And the player's `update`, `preUpdate` and `postUpdate` methods will be invoked in sync with the scene events. Running `this.lifecycle.remove(player)` will stop those methods from being invoked.

TODO: better example with custom mapping & showing how each method hook is optional.

## Development

The project is controlled by npm scripts and uses cypress & jest for testing. Cypress is used for end-to-end verification that the plugin works as expected with Phaser. Jest is used for unit testing the plugin (via heavy mocking since Phaser headless mode is not complete).

- The `watch` and `build` tasks will build the plugin source in library/ or the projects in end-to-end-tests/
- The `serve` task opens the whole project (starting at the root) in a server
- The `dev` task will build & watch the library, tests and open up the server. This is useful for creating tests and updating the library.
- The `dev:cypress` task will build & watch the library & tests, as well as open up cypress in headed mode. This is useful for checking out individual tests and debugging them.
- The `test:cypress` task will build the tests and run cypress in headless mode to check all end-to-end tests.
- The `test:jest` will run the jest tests.

## Tests

The cypress tests rely on a particular structure:

- Each test game inside of "end-to-end-tests/" should have an "index.html" file as the entry point. "src/js/index.js" will be compiled to "build/js/index.js" by webpack. (Cypress doesn't support `type="module"` on scripts, so this is necessary if we need modules.)
- Each test has access to `test-utils.js` which provides `startTest`, `passTest` and `failTest` methods. Call `startTest` at the beginning and pass/fail when the test passes/fails. This manipulates in the DOM in a way that cypress is expecting.
- Each test in "cypress/integration/" simply loads up the specified URL and waits for it to pass or timeout. (Technically, startTest and failTest are ignored, but they are useful for visual inspection of a test.)

The jest unit tests rely on a simple mocking of Phaser. They are stored inside "src/". Once Phaser headless is available, this testing structure could be re-evaluated.

## Similar Work

samme's nice [phaser-plugin-update](https://github.com/samme/phaser-plugin-update) is similar, but just focused on update, whereas our use case requires more of Phaser's life cycle hooks.
