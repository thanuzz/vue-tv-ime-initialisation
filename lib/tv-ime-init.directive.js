"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = require("underscore");
var Logger = require("js-logger");
var api_1 = require("twc-universal-sdk/lib/platforms/orsay/api");
var platform = process.env.PLATFORM;
var supportedPlatforms = ["orsay"];
var apply = underscore_1.contains(supportedPlatforms, platform);
function install(Vue, options) {
    Vue.directive("ime-trigger", {
        bind: function (el, binding, vnode) {
            if (apply && !el.id)
                el.id = "input-el-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
        },
        inserted: function (el, binding, vnode) {
            if (apply) {
                switch (platform) {
                    case "orsay":
                        var ime = new OrsayInput(el);
                        break;
                }
            }
        },
        unbind: function (el, binding, vnode) {
        }
    });
}
var OrsayInput = (function () {
    function OrsayInput(el) {
        this.el = el;
        this.ime = new IMEShell(el.id, this.imeReady);
    }
    OrsayInput.prototype.imeReady = function (imeObject) {
        this.installFocusKeyCallbacks();
        this.installStatusCallbacks();
    };
    OrsayInput.prototype.installFocusKeyCallbacks = function () {
        this.ime.setKeyFunc(api_1.default.oKeys.KEY_RETURN, function (keyCode) { api_1.default.widgetAPI.sendReturnEvent(); return false; });
        this.ime.setKeyFunc(api_1.default.oKeys.KEY_EXIT, function (keyCode) { api_1.default.widgetAPI.sendExitEvent(); return false; });
    };
    OrsayInput.prototype.installStatusCallbacks = function () {
        this.ime.setEnterFunc(this.onEnter);
    };
    OrsayInput.prototype.onEnter = function (string) {
        Logger.info("Enter key pressed in " + this.el.id + ", string is " + string);
    };
    return OrsayInput;
}());
exports.default = {
    install: install
};
