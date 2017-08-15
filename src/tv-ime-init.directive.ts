/**
 * Prerequisites / dependencies for using directive:
 * - twc-universal-sdk is loaded used
 * - orsay sdk is loaded and used.
 *   - http://developer.samsung.com/tv/develop/legacy-platform-library/ref00006/IME_Module
 *   - http://developer.samsung.com/tv/develop/legacy-platform-library/tut00049/index
 *
 */

import * as Vue from "vue";
import { contains } from "underscore";
import * as Logger from "js-logger";
import API from "twc-universal-sdk/lib/platforms/orsay/api";

// Definitions
// declare const IMEShell: (inputObjId: string, callbackFunc: () => any, context?: any) => any;
declare const IMEShell: any;

// enviroment vars
let platform = process.env.PLATFORM;
let supportedPlatforms = ["orsay"];
let apply = contains(supportedPlatforms, platform);


// mandatory vue plugin install function
function install(Vue: any, options: any) {

  // hook the custom directive to vue
  Vue.directive("ime-trigger", {

    // directive lifecycle

    bind: (el: HTMLElement, binding: any, vnode: Vue.VNode) => {
        // if element has no ID attr, generate one
        if (apply && !el.id) el.id = "input-el-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
    },
    inserted: (el: HTMLElement, binding: any, vnode: Vue.VNode) => {

      if (apply) {
        switch (platform) {
          case "orsay":
            let ime = new OrsayInput(el);
            break;
        }
      }
    },
    unbind: (el: any, binding: any, vnode: Vue.VNode) => {

    }
  });
}

class OrsayInput {

  ime: any;
  el: HTMLElement;

  constructor (el: HTMLElement) {
    this.el = el;
    this.ime = new IMEShell(el.id, this.imeReady);
  }

  imeReady(imeObject) {
    this.installFocusKeyCallbacks();
    this.installStatusCallbacks();
  }

  installFocusKeyCallbacks() {
    this.ime.setKeyFunc(API.oKeys.KEY_RETURN, (keyCode) => { API.widgetAPI.sendReturnEvent(); return false; });
    this.ime.setKeyFunc(API.oKeys.KEY_EXIT, (keyCode) => { API.widgetAPI.sendExitEvent(); return false; });
  }

  installStatusCallbacks() {
    // this.ime.setKeypadPos(410, 80);
    // this.ime.setWordBoxPos(18, 6);
    this.ime.setEnterFunc(this.onEnter);
  }

  onEnter(string) {
    Logger.info("Enter key pressed in " + this.el.id + ", string is " + string);
  }

}

// Vue plugin
export default {
  install: install
};