(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("phaser"));
	else if(typeof define === 'function' && define.amd)
		define(["phaser"], factory);
	else if(typeof exports === 'object')
		exports["PhaserLifecyclePlugin"] = factory(require("phaser"));
	else
		root["PhaserLifecyclePlugin"] = factory(root["Phaser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"Phaser","commonjs":"phaser","commonjs2":"phaser","amd":"phaser"}
var external_root_Phaser_commonjs_phaser_commonjs2_phaser_amd_phaser_ = __webpack_require__(0);
var external_root_Phaser_commonjs_phaser_commonjs2_phaser_amd_phaser_default = /*#__PURE__*/__webpack_require__.n(external_root_Phaser_commonjs_phaser_commonjs2_phaser_amd_phaser_);

// CONCATENATED MODULE: ./phaser-lifecycle-plugin.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO:
// - add config option to add() to allow custom mapping to update/preupdate/postupdate
// - add priority/
// - docs
// - more tests



/**
 * Plugin that wraps around Phaser's event system. This allows us to avoid the issues around the
 * EventEmitter library Phaser uses where the EE caches the listeners at the start of an event. This
 * leads to bugs if a listener gets unsubscribed during an event (e.g. the physics system
 * unsubscribing a listener via a CB before the listener's update method). This plugin immediately
 * unsubscribes the listener.
 */

var LifecyclePlugin = function (_Phaser$Plugins$Scene) {
  _inherits(LifecyclePlugin, _Phaser$Plugins$Scene);

  function LifecyclePlugin(scene, pluginManager) {
    _classCallCheck(this, LifecyclePlugin);

    var _this = _possibleConstructorReturn(this, (LifecyclePlugin.__proto__ || Object.getPrototypeOf(LifecyclePlugin)).call(this, scene, pluginManager));

    _this.scene = scene;
    _this.systems = scene.sys;

    _this.updateListeners = new Set();
    _this.preUpdateListeners = new Set();
    _this.postUpdateListeners = new Set();

    if (!scene.sys.settings.isBooted) _this.systems.events.once("boot", _this.boot, _this);
    return _this;
  }

  _createClass(LifecyclePlugin, [{
    key: "boot",
    value: function boot() {
      var emitter = this.systems.events;
      emitter.on("update", this.onUpdate, this);
      emitter.on("preupdate", this.onPreUpdate, this);
      emitter.on("postupdate", this.onPostUpdate, this);
      emitter.on("shutdown", this.onShutdown, this);
      emitter.once("destroy", this.onDestroy, this);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.updateListeners.forEach(function (obj) {
        return obj.update.apply(obj, args);
      });
    }
  }, {
    key: "onPreUpdate",
    value: function onPreUpdate() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.preUpdateListeners.forEach(function (obj) {
        return obj.preUpdate.apply(obj, args);
      });
    }
  }, {
    key: "onPostUpdate",
    value: function onPostUpdate() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.postUpdateListeners.forEach(function (obj) {
        return obj.postUpdate.apply(obj, args);
      });
    }
  }, {
    key: "onShutdown",
    value: function onShutdown() {
      this.updateListeners.clear();
      this.preUpdateListeners.clear();
      this.postUpdateListeners.clear();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      var emitter = this.systems.events;

      emitter.off("update", this.onUpdate, this);
      emitter.off("preupdate", this.onPreUpdate, this);
      emitter.off("postupdate", this.onPostUpdate, this);
      emitter.off("shutdown", this.onShutdown, this);

      this.updateListeners.clear();
      this.preUpdateListeners.clear();
      this.postUpdateListeners.clear();
    }
  }, {
    key: "add",
    value: function add(obj) {
      if (obj.update) this.updateListeners.add(obj);
      if (obj.preUpdate) this.preUpdateListeners.add(obj);
      if (obj.postUpdate) this.postUpdateListeners.add(obj);
    }
  }, {
    key: "remove",
    value: function remove(obj) {
      this.updateListeners.delete(obj);
      this.preUpdateListeners.delete(obj);
      this.postUpdateListeners.delete(obj);
    }
  }]);

  return LifecyclePlugin;
}(external_root_Phaser_commonjs_phaser_commonjs2_phaser_amd_phaser_default.a.Plugins.ScenePlugin);

/* harmony default export */ var phaser_lifecycle_plugin = (LifecyclePlugin);
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (phaser_lifecycle_plugin);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=phaser-lifecycle-plugin.js.map