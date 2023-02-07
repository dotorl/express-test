"use strict";
globalThis["webpackHotUpdatereact_video_sdk_demo"]("main",{

/***/ "./src/config/dev.ts":
/*!***************************!*\
  !*** ./src/config/dev.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "devConfig": () => (/* binding */ devConfig)
/* harmony export */ });
/* harmony import */ var _utils_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/platform */ "./src/utils/platform.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const devConfig = {
  sdkKey: 'QLPJ8dpEreZJllMY8qymS5Q3R8BRUdUxQuJQ',
  sdkSecret: 'wMk1jdZlZY71nKiHnnjfftmYdrr1WfR96yiV',
  webEndpoint: 'zoom.us',
  topic: 'choks_topic_1',
  name: `${(0,_utils_platform__WEBPACK_IMPORTED_MODULE_0__.getExploreName)()}-${Math.floor(Math.random() * 1000)}-inReact`,
  password: 'aabbccdd',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // role = 1 to join as host, 0 to join as attendee. The first user must join as host to start the session
  role: 0
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae549951c29631dd014a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8d62fff343fb385fd45f.hot-update.js.map