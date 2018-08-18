(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("phaser"));
	else if(typeof define === 'function' && define.amd)
		define(["phaser"], factory);
	else if(typeof exports === 'object')
		exports["PhaserLifecyclePlugin"] = factory(require("phaser"));
	else
		root["PhaserLifecyclePlugin"] = factory(root["Phaser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_phaser__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _phaser_lifecycle_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phaser-lifecycle-plugin */ \"./phaser-lifecycle-plugin.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_phaser_lifecycle_plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJMaWZlY3ljbGVQbHVnaW4vLi9pbmRleC5qcz80MWY1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsK0RBQWUsZ0VBQWYiLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaGFzZXJMaWZlY3ljbGVQbHVnaW4gZnJvbSBcIi4vcGhhc2VyLWxpZmVjeWNsZS1wbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBoYXNlckxpZmVjeWNsZVBsdWdpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./phaser-lifecycle-plugin.js":
/*!************************************!*\
  !*** ./phaser-lifecycle-plugin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n/**\r\n * Plugin that wraps around Phaser's event system. This allows us to avoid the issues around the\r\n * EventEmitter library Phaser uses where the EE caches the listeners at the start of an event. This\r\n * leads to bugs if a listener gets unsubscribed during an event (e.g. the physics system\r\n * unsubscribing a listener via a CB before the listener's update method). This plugin immediately\r\n * unsubscribes the listener.\r\n */\n\nvar LifecyclePlugin = function (_Phaser$Plugins$Scene) {\n  _inherits(LifecyclePlugin, _Phaser$Plugins$Scene);\n\n  function LifecyclePlugin(scene, pluginManager) {\n    _classCallCheck(this, LifecyclePlugin);\n\n    var _this = _possibleConstructorReturn(this, (LifecyclePlugin.__proto__ || Object.getPrototypeOf(LifecyclePlugin)).call(this, scene, pluginManager));\n\n    _this.scene = scene;\n    _this.systems = scene.sys;\n\n    _this.updateListeners = new Set();\n    _this.preUpdateListeners = new Set();\n    _this.postUpdateListeners = new Set();\n\n    if (!scene.sys.settings.isBooted) _this.systems.events.once(\"boot\", _this.boot, _this);\n    return _this;\n  }\n\n  _createClass(LifecyclePlugin, [{\n    key: \"boot\",\n    value: function boot() {\n      var emitter = this.systems.events;\n      emitter.on(\"update\", this.onUpdate, this);\n      emitter.on(\"preupdate\", this.onPreUpdate, this);\n      emitter.on(\"postupdate\", this.onPostUpdate, this);\n      emitter.on(\"shutdown\", this.onShutdown, this);\n      emitter.once(\"destroy\", this.onDestroy, this);\n    }\n  }, {\n    key: \"onUpdate\",\n    value: function onUpdate() {\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this.updateListeners.forEach(function (obj) {\n        return obj.update.apply(obj, args);\n      });\n    }\n  }, {\n    key: \"onPreUpdate\",\n    value: function onPreUpdate() {\n      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      this.preUpdateListeners.forEach(function (obj) {\n        return obj.preUpdate.apply(obj, args);\n      });\n    }\n  }, {\n    key: \"onPostUpdate\",\n    value: function onPostUpdate() {\n      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n\n      this.postUpdateListeners.forEach(function (obj) {\n        return obj.postUpdate.apply(obj, args);\n      });\n    }\n  }, {\n    key: \"onShutdown\",\n    value: function onShutdown() {\n      this.updateListeners.clear();\n      this.preUpdateListeners.clear();\n      this.postUpdateListeners.clear();\n    }\n  }, {\n    key: \"onDestroy\",\n    value: function onDestroy() {\n      var emitter = this.systems.events;\n\n      emitter.off(\"update\", this.onUpdate, this);\n      emitter.off(\"preupdate\", this.onPreUpdate, this);\n      emitter.off(\"postupdate\", this.onPostUpdate, this);\n      emitter.off(\"shutdown\", this.onShutdown, this);\n\n      this.updateListeners.clear();\n      this.preUpdateListeners.clear();\n      this.postUpdateListeners.clear();\n    }\n\n    // TODO: add config option, add priority\n\n  }, {\n    key: \"add\",\n    value: function add(obj) {\n      if (obj.update) this.updateListeners.add(obj);\n      if (obj.preUpdate) this.preUpdateListeners.add(obj);\n      if (obj.postUpdate) this.postUpdateListeners.add(obj);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(obj) {\n      this.updateListeners.delete(obj);\n      this.preUpdateListeners.delete(obj);\n      this.postUpdateListeners.delete(obj);\n    }\n  }]);\n\n  return LifecyclePlugin;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Plugins.ScenePlugin);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LifecyclePlugin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJMaWZlY3ljbGVQbHVnaW4vLi9waGFzZXItbGlmZWN5Y2xlLXBsdWdpbi5qcz8yMmVhIl0sIm5hbWVzIjpbIkxpZmVjeWNsZVBsdWdpbiIsInNjZW5lIiwicGx1Z2luTWFuYWdlciIsInN5c3RlbXMiLCJzeXMiLCJ1cGRhdGVMaXN0ZW5lcnMiLCJTZXQiLCJwcmVVcGRhdGVMaXN0ZW5lcnMiLCJwb3N0VXBkYXRlTGlzdGVuZXJzIiwic2V0dGluZ3MiLCJpc0Jvb3RlZCIsImV2ZW50cyIsIm9uY2UiLCJib290IiwiZW1pdHRlciIsIm9uIiwib25VcGRhdGUiLCJvblByZVVwZGF0ZSIsIm9uUG9zdFVwZGF0ZSIsIm9uU2h1dGRvd24iLCJvbkRlc3Ryb3kiLCJhcmdzIiwiZm9yRWFjaCIsIm9iaiIsInVwZGF0ZSIsInByZVVwZGF0ZSIsInBvc3RVcGRhdGUiLCJjbGVhciIsIm9mZiIsImFkZCIsImRlbGV0ZSIsIlBoYXNlciIsIlBsdWdpbnMiLCJTY2VuZVBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7SUFPcUJBLGU7OztBQUNuQiwyQkFBWUMsS0FBWixFQUFtQkMsYUFBbkIsRUFBa0M7QUFBQTs7QUFBQSxrSUFDMUJELEtBRDBCLEVBQ25CQyxhQURtQjs7QUFHaEMsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0UsT0FBTCxHQUFlRixNQUFNRyxHQUFyQjs7QUFFQSxVQUFLQyxlQUFMLEdBQXVCLElBQUlDLEdBQUosRUFBdkI7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQixJQUFJRCxHQUFKLEVBQTFCO0FBQ0EsVUFBS0UsbUJBQUwsR0FBMkIsSUFBSUYsR0FBSixFQUEzQjs7QUFFQSxRQUFJLENBQUNMLE1BQU1HLEdBQU4sQ0FBVUssUUFBVixDQUFtQkMsUUFBeEIsRUFDRSxNQUFLUCxPQUFMLENBQWFRLE1BQWIsQ0FBb0JDLElBQXBCLENBQXlCLE1BQXpCLEVBQWlDLE1BQUtDLElBQXRDO0FBWDhCO0FBWWpDOzs7OzJCQUVNO0FBQ0wsVUFBTUMsVUFBVSxLQUFLWCxPQUFMLENBQWFRLE1BQTdCO0FBQ0FHLGNBQVFDLEVBQVIsQ0FBVyxRQUFYLEVBQXFCLEtBQUtDLFFBQTFCLEVBQW9DLElBQXBDO0FBQ0FGLGNBQVFDLEVBQVIsQ0FBVyxXQUFYLEVBQXdCLEtBQUtFLFdBQTdCLEVBQTBDLElBQTFDO0FBQ0FILGNBQVFDLEVBQVIsQ0FBVyxZQUFYLEVBQXlCLEtBQUtHLFlBQTlCLEVBQTRDLElBQTVDO0FBQ0FKLGNBQVFDLEVBQVIsQ0FBVyxVQUFYLEVBQXVCLEtBQUtJLFVBQTVCLEVBQXdDLElBQXhDO0FBQ0FMLGNBQVFGLElBQVIsQ0FBYSxTQUFiLEVBQXdCLEtBQUtRLFNBQTdCLEVBQXdDLElBQXhDO0FBQ0Q7OzsrQkFFaUI7QUFBQSx3Q0FBTkMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ2hCLFdBQUtoQixlQUFMLENBQXFCaUIsT0FBckIsQ0FBNkI7QUFBQSxlQUFPQyxJQUFJQyxNQUFKLFlBQWNILElBQWQsQ0FBUDtBQUFBLE9BQTdCO0FBQ0Q7OztrQ0FFb0I7QUFBQSx5Q0FBTkEsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ25CLFdBQUtkLGtCQUFMLENBQXdCZSxPQUF4QixDQUFnQztBQUFBLGVBQU9DLElBQUlFLFNBQUosWUFBaUJKLElBQWpCLENBQVA7QUFBQSxPQUFoQztBQUNEOzs7bUNBRXFCO0FBQUEseUNBQU5BLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNwQixXQUFLYixtQkFBTCxDQUF5QmMsT0FBekIsQ0FBaUM7QUFBQSxlQUFPQyxJQUFJRyxVQUFKLFlBQWtCTCxJQUFsQixDQUFQO0FBQUEsT0FBakM7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS2hCLGVBQUwsQ0FBcUJzQixLQUFyQjtBQUNBLFdBQUtwQixrQkFBTCxDQUF3Qm9CLEtBQXhCO0FBQ0EsV0FBS25CLG1CQUFMLENBQXlCbUIsS0FBekI7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTWIsVUFBVSxLQUFLWCxPQUFMLENBQWFRLE1BQTdCOztBQUVBRyxjQUFRYyxHQUFSLENBQVksUUFBWixFQUFzQixLQUFLWixRQUEzQixFQUFxQyxJQUFyQztBQUNBRixjQUFRYyxHQUFSLENBQVksV0FBWixFQUF5QixLQUFLWCxXQUE5QixFQUEyQyxJQUEzQztBQUNBSCxjQUFRYyxHQUFSLENBQVksWUFBWixFQUEwQixLQUFLVixZQUEvQixFQUE2QyxJQUE3QztBQUNBSixjQUFRYyxHQUFSLENBQVksVUFBWixFQUF3QixLQUFLVCxVQUE3QixFQUF5QyxJQUF6Qzs7QUFFQSxXQUFLZCxlQUFMLENBQXFCc0IsS0FBckI7QUFDQSxXQUFLcEIsa0JBQUwsQ0FBd0JvQixLQUF4QjtBQUNBLFdBQUtuQixtQkFBTCxDQUF5Qm1CLEtBQXpCO0FBQ0Q7O0FBRUQ7Ozs7d0JBQ0lKLEcsRUFBSztBQUNQLFVBQUlBLElBQUlDLE1BQVIsRUFBZ0IsS0FBS25CLGVBQUwsQ0FBcUJ3QixHQUFyQixDQUF5Qk4sR0FBekI7QUFDaEIsVUFBSUEsSUFBSUUsU0FBUixFQUFtQixLQUFLbEIsa0JBQUwsQ0FBd0JzQixHQUF4QixDQUE0Qk4sR0FBNUI7QUFDbkIsVUFBSUEsSUFBSUcsVUFBUixFQUFvQixLQUFLbEIsbUJBQUwsQ0FBeUJxQixHQUF6QixDQUE2Qk4sR0FBN0I7QUFDckI7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsV0FBS2xCLGVBQUwsQ0FBcUJ5QixNQUFyQixDQUE0QlAsR0FBNUI7QUFDQSxXQUFLaEIsa0JBQUwsQ0FBd0J1QixNQUF4QixDQUErQlAsR0FBL0I7QUFDQSxXQUFLZixtQkFBTCxDQUF5QnNCLE1BQXpCLENBQWdDUCxHQUFoQztBQUNEOzs7O0VBbEUwQyw2Q0FBQVEsQ0FBT0MsT0FBUCxDQUFlQyxXOzsrREFBdkNqQyxlIiwiZmlsZSI6Ii4vcGhhc2VyLWxpZmVjeWNsZS1wbHVnaW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQbHVnaW4gdGhhdCB3cmFwcyBhcm91bmQgUGhhc2VyJ3MgZXZlbnQgc3lzdGVtLiBUaGlzIGFsbG93cyB1cyB0byBhdm9pZCB0aGUgaXNzdWVzIGFyb3VuZCB0aGVcclxuICogRXZlbnRFbWl0dGVyIGxpYnJhcnkgUGhhc2VyIHVzZXMgd2hlcmUgdGhlIEVFIGNhY2hlcyB0aGUgbGlzdGVuZXJzIGF0IHRoZSBzdGFydCBvZiBhbiBldmVudC4gVGhpc1xyXG4gKiBsZWFkcyB0byBidWdzIGlmIGEgbGlzdGVuZXIgZ2V0cyB1bnN1YnNjcmliZWQgZHVyaW5nIGFuIGV2ZW50IChlLmcuIHRoZSBwaHlzaWNzIHN5c3RlbVxyXG4gKiB1bnN1YnNjcmliaW5nIGEgbGlzdGVuZXIgdmlhIGEgQ0IgYmVmb3JlIHRoZSBsaXN0ZW5lcidzIHVwZGF0ZSBtZXRob2QpLiBUaGlzIHBsdWdpbiBpbW1lZGlhdGVseVxyXG4gKiB1bnN1YnNjcmliZXMgdGhlIGxpc3RlbmVyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZWN5Y2xlUGx1Z2luIGV4dGVuZHMgUGhhc2VyLlBsdWdpbnMuU2NlbmVQbHVnaW4ge1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBwbHVnaW5NYW5hZ2VyKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgcGx1Z2luTWFuYWdlcik7XHJcblxyXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy5zeXN0ZW1zID0gc2NlbmUuc3lzO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5wcmVVcGRhdGVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLnBvc3RVcGRhdGVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgaWYgKCFzY2VuZS5zeXMuc2V0dGluZ3MuaXNCb290ZWQpXHJcbiAgICAgIHRoaXMuc3lzdGVtcy5ldmVudHMub25jZShcImJvb3RcIiwgdGhpcy5ib290LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGJvb3QoKSB7XHJcbiAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5zeXN0ZW1zLmV2ZW50cztcclxuICAgIGVtaXR0ZXIub24oXCJ1cGRhdGVcIiwgdGhpcy5vblVwZGF0ZSwgdGhpcyk7XHJcbiAgICBlbWl0dGVyLm9uKFwicHJldXBkYXRlXCIsIHRoaXMub25QcmVVcGRhdGUsIHRoaXMpO1xyXG4gICAgZW1pdHRlci5vbihcInBvc3R1cGRhdGVcIiwgdGhpcy5vblBvc3RVcGRhdGUsIHRoaXMpO1xyXG4gICAgZW1pdHRlci5vbihcInNodXRkb3duXCIsIHRoaXMub25TaHV0ZG93biwgdGhpcyk7XHJcbiAgICBlbWl0dGVyLm9uY2UoXCJkZXN0cm95XCIsIHRoaXMub25EZXN0cm95LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uVXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzLmZvckVhY2gob2JqID0+IG9iai51cGRhdGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgb25QcmVVcGRhdGUoLi4uYXJncykge1xyXG4gICAgdGhpcy5wcmVVcGRhdGVMaXN0ZW5lcnMuZm9yRWFjaChvYmogPT4gb2JqLnByZVVwZGF0ZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBvblBvc3RVcGRhdGUoLi4uYXJncykge1xyXG4gICAgdGhpcy5wb3N0VXBkYXRlTGlzdGVuZXJzLmZvckVhY2gob2JqID0+IG9iai5wb3N0VXBkYXRlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIG9uU2h1dGRvd24oKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgdGhpcy5wcmVVcGRhdGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgIHRoaXMucG9zdFVwZGF0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMuc3lzdGVtcy5ldmVudHM7XHJcblxyXG4gICAgZW1pdHRlci5vZmYoXCJ1cGRhdGVcIiwgdGhpcy5vblVwZGF0ZSwgdGhpcyk7XHJcbiAgICBlbWl0dGVyLm9mZihcInByZXVwZGF0ZVwiLCB0aGlzLm9uUHJlVXBkYXRlLCB0aGlzKTtcclxuICAgIGVtaXR0ZXIub2ZmKFwicG9zdHVwZGF0ZVwiLCB0aGlzLm9uUG9zdFVwZGF0ZSwgdGhpcyk7XHJcbiAgICBlbWl0dGVyLm9mZihcInNodXRkb3duXCIsIHRoaXMub25TaHV0ZG93biwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgIHRoaXMucHJlVXBkYXRlTGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgICB0aGlzLnBvc3RVcGRhdGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGFkZCBjb25maWcgb3B0aW9uLCBhZGQgcHJpb3JpdHlcclxuICBhZGQob2JqKSB7XHJcbiAgICBpZiAob2JqLnVwZGF0ZSkgdGhpcy51cGRhdGVMaXN0ZW5lcnMuYWRkKG9iaik7XHJcbiAgICBpZiAob2JqLnByZVVwZGF0ZSkgdGhpcy5wcmVVcGRhdGVMaXN0ZW5lcnMuYWRkKG9iaik7XHJcbiAgICBpZiAob2JqLnBvc3RVcGRhdGUpIHRoaXMucG9zdFVwZGF0ZUxpc3RlbmVycy5hZGQob2JqKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShvYmopIHtcclxuICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzLmRlbGV0ZShvYmopO1xyXG4gICAgdGhpcy5wcmVVcGRhdGVMaXN0ZW5lcnMuZGVsZXRlKG9iaik7XHJcbiAgICB0aGlzLnBvc3RVcGRhdGVMaXN0ZW5lcnMuZGVsZXRlKG9iaik7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./phaser-lifecycle-plugin.js\n");

/***/ }),

/***/ "phaser":
/*!******************************************************************************************!*\
  !*** external {"root":"Phaser","commonjs":"phaser","commonjs2":"phaser","amd":"phaser"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_phaser__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGFzZXJMaWZlY3ljbGVQbHVnaW4vZXh0ZXJuYWwge1wicm9vdFwiOlwiUGhhc2VyXCIsXCJjb21tb25qc1wiOlwicGhhc2VyXCIsXCJjb21tb25qczJcIjpcInBoYXNlclwiLFwiYW1kXCI6XCJwaGFzZXJcIn0/YTEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwaGFzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGhhc2VyX187Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///phaser\n");

/***/ })

/******/ })["default"];
});