// import API from "twc-universal-sdk/lib/platforms/orsay/api";
// import * as Logger from "js-logger";

// // Definitions
// // declare const IMEShell: (inputObjId: string, callbackFunc: () => any, context?: any) => any;
// declare const IMEShell: any;

// export default class OrsayInput {

//   ime: any;
//   el: HTMLElement;

//   constructor (el: HTMLElement) {
//     this.el = el;
//     this.ime = new IMEShell(el.id, this.imeReady);
//   }

//   imeReady(imeObject) {
//     this.installFocusKeyCallbacks();
//     this.installStatusCallbacks();
//   }

//   installFocusKeyCallbacks() {
//     this.ime.setKeyFunc(API.oKeys.KEY_RETURN, (keyCode) => { API.widgetAPI.sendReturnEvent(); return false; });
//     this.ime.setKeyFunc(API.oKeys.KEY_EXIT, (keyCode) => { API.widgetAPI.sendExitEvent(); return false; });
//   }

//   installStatusCallbacks() {
//     // this.ime.setKeypadPos(410, 80);
//     // this.ime.setWordBoxPos(18, 6);
//     this.ime.setEnterFunc(this.onEnter);
//   }

//   onEnter(string) {
//     Logger.info("Enter key pressed in " + this.el.id + ", string is " + string);
//   }

// }
