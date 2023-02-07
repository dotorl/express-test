"use strict";
globalThis["webpackHotUpdatereact_video_sdk_demo"]("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zoom/videosdk */ "./node_modules/@zoom/videosdk/dist/index.umd.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/App */ "./src/App.tsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var _context_zoom_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/zoom-context */ "./src/context/zoom-context.ts");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/dev */ "./src/config/dev.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/jogwangseog/choks/videosdk-web-sample/react-demo/src/index.tsx";
/* eslint-disable no-restricted-globals */




// import App from './App';






let meetingArgs = Object.fromEntries(new URLSearchParams(location.search));
// Add enforceGalleryView to turn on the gallery view without SharedAddayBuffer
if (!meetingArgs.sdkKey || !meetingArgs.topic || !meetingArgs.name || !meetingArgs.signature) {
  meetingArgs = {
    ...meetingArgs,
    ..._config_dev__WEBPACK_IMPORTED_MODULE_7__.devConfig
  };
  meetingArgs.enforceGalleryView = true;
}
if (meetingArgs.web) {
  if (meetingArgs.topic) {
    try {
      meetingArgs.topic = (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.b64DecodeUnicode)(meetingArgs.topic);
    } catch (e) {}
  } else {
    meetingArgs.topic = '';
  }
  if (meetingArgs.name) {
    try {
      meetingArgs.name = (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.b64DecodeUnicode)(meetingArgs.name);
    } catch (e) {}
  } else {
    meetingArgs.name = '';
  }
  if (meetingArgs.password) {
    try {
      meetingArgs.password = (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.b64DecodeUnicode)(meetingArgs.password);
    } catch (e) {}
  } else {
    meetingArgs.password = '';
  }
  if (meetingArgs.sessionKey) {
    try {
      meetingArgs.sessionKey = (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.b64DecodeUnicode)(meetingArgs.sessionKey);
    } catch (e) {}
  } else {
    meetingArgs.sessionKey = '';
  }
  if (meetingArgs.userIdentity) {
    try {
      meetingArgs.userIdentity = (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.b64DecodeUnicode)(meetingArgs.userIdentity);
    } catch (e) {}
  } else {
    meetingArgs.userIdentity = '';
  }
  if (meetingArgs.role) {
    meetingArgs.role = parseInt(meetingArgs.role, 10);
  } else {
    meetingArgs.role = 1;
  }
}
if (!meetingArgs.signature && meetingArgs.sdkSecret && meetingArgs.topic) {
  meetingArgs.signature = (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.generateVideoToken)(meetingArgs.sdkKey, meetingArgs.sdkSecret, meetingArgs.topic, meetingArgs.password, meetingArgs.userIdentity, meetingArgs.sessionKey, parseInt(meetingArgs.role, 10));
}
console.log('=====================================');
console.log('meetingArgs', meetingArgs);
const zmClient = _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2___default().createClient();
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_context_zoom_context__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: zmClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
      meetingArgs: meetingArgs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 82,
  columnNumber: 3
}, undefined), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__["default"])();

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
/******/ 	__webpack_require__.h = () => ("fbfe532fd49d8b4a6a67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.07e9f6cdf048b53925a5.hot-update.js.map