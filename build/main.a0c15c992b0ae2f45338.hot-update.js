"use strict";
globalThis["webpackHotUpdatereact_video_sdk_demo"]("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zoom/videosdk */ "./node_modules/@zoom/videosdk/dist/index.umd.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var _feature_home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/feature/home/home */ "./src/feature/home/home.tsx");
/* harmony import */ var _feature_video_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature/video/video */ "./src/feature/video/video.tsx");
/* harmony import */ var _feature_video_video_single__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature/video/video-single */ "./src/feature/video/video-single.tsx");
/* harmony import */ var _feature_video_video_non_sab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature/video/video-non-sab */ "./src/feature/video/video-non-sab.tsx");
/* harmony import */ var _feature_preview_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature/preview/preview */ "./src/feature/preview/preview.tsx");
/* harmony import */ var _context_zoom_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/zoom-context */ "./src/context/zoom-context.ts");
/* harmony import */ var _context_media_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/media-context */ "./src/context/media-context.ts");
/* harmony import */ var _context_chat_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context/chat-context */ "./src/context/chat-context.ts");
/* harmony import */ var _context_cmd_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context/cmd-context */ "./src/context/cmd-context.ts");
/* harmony import */ var _context_live_transcription__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./context/live-transcription */ "./src/context/live-transcription.ts");
/* harmony import */ var _context_recording_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./context/recording-context */ "./src/context/recording-context.ts");
/* harmony import */ var _component_loading_layer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/loading-layer */ "./src/component/loading-layer.tsx");
/* harmony import */ var _feature_chat_chat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feature/chat/chat */ "./src/feature/chat/chat.tsx");
/* harmony import */ var _feature_command_command__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feature/command/command */ "./src/feature/command/command.tsx");
/* harmony import */ var _feature_subsession_subsession__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feature/subsession/subsession */ "./src/feature/subsession/subsession.tsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _context_subsession_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./context/subsession-context */ "./src/context/subsession-context.ts");
/* harmony import */ var _utils_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/platform */ "./src/utils/platform.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/jogwangseog/choks/videosdk-web-sample/react-demo/src/App.tsx",
  _s = __webpack_require__.$Refresh$.signature();






// import Home from './feature/home/home';



















const mediaShape = {
  audio: {
    encode: false,
    decode: false
  },
  video: {
    encode: false,
    decode: false
  },
  share: {
    encode: false,
    decode: false
  }
};
const mediaReducer = (0,immer__WEBPACK_IMPORTED_MODULE_22__["default"])((draft, action) => {
  switch (action.type) {
    case 'audio-encode':
      {
        draft.audio.encode = action.payload;
        break;
      }
    case 'audio-decode':
      {
        draft.audio.decode = action.payload;
        break;
      }
    case 'video-encode':
      {
        draft.video.encode = action.payload;
        break;
      }
    case 'video-decode':
      {
        draft.video.decode = action.payload;
        break;
      }
    case 'share-encode':
      {
        draft.share.encode = action.payload;
        break;
      }
    case 'share-decode':
      {
        draft.share.decode = action.payload;
        break;
      }
    case 'reset-media':
      {
        Object.assign(draft, {
          ...mediaShape
        });
        break;
      }
    default:
      break;
  }
}, mediaShape);
function App(props) {
  _s();
  const {
    meetingArgs: {
      sdkKey,
      topic,
      signature,
      name,
      password,
      webEndpoint: webEndpointArg,
      enforceGalleryView
    }
  } = props;
  const [loading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [loadingText, setLoadingText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isFailover, setIsFailover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('closed');
  const [mediaState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(mediaReducer, mediaShape);
  const [mediaStream, setMediaStream] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [chatClient, setChatClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [recordingClient, setRecordingClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [commandClient, setCommandClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [subsessionClient, setSubsessionClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [liveTranscriptionClient, setLiveTranscriptionClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isSupportGalleryView, setIsSupportGalleryView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const zmClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_zoom_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  let webEndpoint;
  if (webEndpointArg) {
    webEndpoint = webEndpointArg;
  } else {
    var _window$webEndpoint, _window;
    webEndpoint = (_window$webEndpoint = (_window = window) === null || _window === void 0 ? void 0 : _window.webEndpoint) !== null && _window$webEndpoint !== void 0 ? _window$webEndpoint : 'zoom.us';
  }
  const mediaContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ...mediaState,
    mediaStream
  }), [mediaState, mediaStream]);
  const galleryViewWithoutSAB = Number(enforceGalleryView) === 1 && !window.crossOriginIsolated;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const init = async () => {
      await zmClient.init('en-US', `${window.location.origin}/lib`, {
        webEndpoint,
        enforceMultipleVideos: galleryViewWithoutSAB,
        stayAwake: true
      });
      try {
        setLoadingText('Joining the session...');
        await zmClient.join(topic, signature, name, password).catch(e => {
          console.log(e);
        });
        const stream = zmClient.getMediaStream();
        setMediaStream(stream);
        setIsSupportGalleryView(stream.isSupportMultipleVideos() && !(0,_utils_platform__WEBPACK_IMPORTED_MODULE_20__.isAndroidBrowser)());
        const chatClient = zmClient.getChatClient();
        const commandClient = zmClient.getCommandClient();
        const recordingClient = zmClient.getRecordingClient();
        const ssClient = zmClient.getSubsessionClient();
        const ltClient = zmClient.getLiveTranscriptionClient();
        setChatClient(chatClient);
        setCommandClient(commandClient);
        setRecordingClient(recordingClient);
        setSubsessionClient(ssClient);
        setLiveTranscriptionClient(ltClient);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_23__["default"].error(e.reason);
      }
    };
    init();
    return () => {
      _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1___default().destroyClient();
    };
  }, [sdkKey, signature, zmClient, topic, name, password, webEndpoint, galleryViewWithoutSAB]);
  const onConnectionChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(payload => {
    if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionState.Reconnecting) {
      setIsLoading(true);
      setIsFailover(true);
      setStatus('connecting');
      const {
        reason,
        subsessionName
      } = payload;
      if (reason === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ReconnectReason.Failover) {
        setLoadingText('Session Disconnected,Try to reconnect');
      } else if (reason === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ReconnectReason.JoinSubsession || reason === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ReconnectReason.MoveToSubsession) {
        setLoadingText(`Joining ${subsessionName}...`);
      } else if (reason === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ReconnectReason.BackToMainSession) {
        setLoadingText('Returning to Main Session...');
      }
    } else if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionState.Connected) {
      setStatus('connected');
      if (isFailover) {
        setIsLoading(false);
      }
      window.zmClient = zmClient;
      window.mediaStream = zmClient.getMediaStream();
      console.log('getSessionInfo', zmClient.getSessionInfo());
    } else if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionState.Closed) {
      setStatus('closed');
      dispatch({
        type: 'reset-media'
      });
      if (payload.reason === 'ended by host') {
        antd__WEBPACK_IMPORTED_MODULE_24__["default"].warning({
          title: 'Meeting ended',
          content: 'This meeting has been ended by host'
        });
      }
    }
  }, [isFailover, zmClient]);
  const onMediaSDKChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(payload => {
    const {
      action,
      type,
      result
    } = payload;
    dispatch({
      type: `${type}-${action}`,
      payload: result === 'success'
    });
  }, []);
  const onDialoutChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(payload => {
    console.log('onDialoutChange', payload);
  }, []);
  const onAudioMerged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(payload => {
    console.log('onAudioMerged', payload);
  }, []);
  const onLeaveOrJoinSession = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (status === 'closed') {
      setIsLoading(true);
      await zmClient.join(topic, signature, name, password);
      setIsLoading(false);
    } else if (status === 'connected') {
      await zmClient.leave();
      antd__WEBPACK_IMPORTED_MODULE_23__["default"].warn('You have left the session.');
    }
  }, [zmClient, status, topic, signature, name, password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    zmClient.on('connection-change', onConnectionChange);
    zmClient.on('media-sdk-change', onMediaSDKChange);
    zmClient.on('dialout-state-change', onDialoutChange);
    zmClient.on('merged-audio', onAudioMerged);
    return () => {
      zmClient.off('connection-change', onConnectionChange);
      zmClient.off('media-sdk-change', onMediaSDKChange);
      zmClient.off('dialout-state-change', onDialoutChange);
      zmClient.off('merged-audio', onAudioMerged);
    };
  }, [zmClient, onConnectionChange, onMediaSDKChange, onDialoutChange, onAudioMerged]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
    className: "App",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_component_loading_layer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      content: loadingText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 19
    }, this), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_context_media_context__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
      value: mediaContext,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_context_chat_context__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
        value: chatClient,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_context_recording_context__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
          value: recordingClient,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_context_cmd_context__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
            value: commandClient,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_context_subsession_context__WEBPACK_IMPORTED_MODULE_19__["default"].Provider, {
              value: subsessionClient,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_context_live_transcription__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
                value: liveTranscriptionClient,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_25__.BrowserRouter, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Switch, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/",
                      render: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_feature_home_home__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        ...props,
                        status: status,
                        onLeaveOrJoinSession: onLeaveOrJoinSession
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 250,
                        columnNumber: 29
                      }, this),
                      exact: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/index.html",
                      component: _feature_home_home__WEBPACK_IMPORTED_MODULE_3__["default"],
                      exact: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/chat",
                      component: _feature_chat_chat__WEBPACK_IMPORTED_MODULE_15__["default"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/command",
                      component: _feature_command_command__WEBPACK_IMPORTED_MODULE_16__["default"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 256,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/video",
                      component: isSupportGalleryView ? _feature_video_video__WEBPACK_IMPORTED_MODULE_4__["default"] : galleryViewWithoutSAB ? _feature_video_video_non_sab__WEBPACK_IMPORTED_MODULE_6__["default"] : _feature_video_video_single__WEBPACK_IMPORTED_MODULE_5__["default"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/subsession",
                      component: _feature_subsession_subsession__WEBPACK_IMPORTED_MODULE_17__["default"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
                      path: "/preview",
                      component: _feature_preview_preview__WEBPACK_IMPORTED_MODULE_7__["default"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 5
  }, this);
}
_s(App, "zrOY0dmngfNicMhDou6e4g9ocpE=");
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
__webpack_require__.$Refresh$.register(_c, "App");

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
/******/ 	__webpack_require__.h = () => ("8d62fff343fb385fd45f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a0c15c992b0ae2f45338.hot-update.js.map