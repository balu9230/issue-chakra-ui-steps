# issue-chakra-ui-steps
Bug fix reqd: Cannot read properties of undefined (reading 'width') at chakra-ui-steps.es.js:315:25

# --------- Traceback in browser -------- #

Uncaught TypeError: Cannot read properties of undefined (reading 'width')
    at chakra-ui-steps.es.js:315:25
    at renderWithHooks (react-dom.development.js:16305:18)
    at updateForwardRef (react-dom.development.js:19226:20)
    at beginWork (react-dom.development.js:21636:16)
    at HTMLUnknownElement.callCallback2 (react-dom.development.js:4164:14)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)
    at invokeGuardedCallback (react-dom.development.js:4277:31)
    at beginWork$1 (react-dom.development.js:27451:7)
    at performUnitOfWork (react-dom.development.js:26557:12)
    at workLoopSync (react-dom.development.js:26466:5)
3react-dom.development.js:18687 The above error occurred in the <ForwardRef> component:

    at http://127.0.0.1:5174/node_modules/.vite/deps/chakra-ui-steps.js?v=823e9735:284:5
    at ol
    at http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:4110:46
    at ChakraComponent (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:10382:35)
    at StepsProvider (http://127.0.0.1:5174/node_modules/.vite/deps/chakra-ui-steps.js?v=823e9735:72:3)
    at http://127.0.0.1:5174/node_modules/.vite/deps/chakra-ui-steps.js?v=823e9735:406:18
    at div
    at http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:4110:46
    at ChakraComponent (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:10382:35)
    at Flex2 (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:23009:22)
    at StepsExample (http://127.0.0.1:5174/src/Steps.tsx:52:7)
    at div
    at div
    at App (http://127.0.0.1:5174/src/App.tsx:23:29)
    at EnvironmentProvider (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:23663:11)
    at ColorModeProvider (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:1221:5)
    at ThemeProvider2 (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:4137:45)
    at ThemeProvider3 (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:10312:11)
    at ChakraProvider (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:34575:5)
    at ChakraProvider2 (http://127.0.0.1:5174/node_modules/.vite/deps/chunk-WJYB2MW5.js?v=4995cc19:34599:3)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
logCapturedError @ react-dom.development.js:18687
react-dom.development.js:26923 Uncaught TypeError: Cannot read properties of undefined (reading 'width')
    at chakra-ui-steps.es.js:315:25
    at renderWithHooks (react-dom.development.js:16305:18)
    at updateForwardRef (react-dom.development.js:19226:20)
    at beginWork (react-dom.development.js:21636:16)
    at beginWork$1 (react-dom.development.js:27426:14)
    at performUnitOfWork (react-dom.development.js:26557:12)
    at workLoopSync (react-dom.development.js:26466:5)
    at renderRootSync (react-dom.development.js:26434:7)
    at recoverFromConcurrentError (react-dom.development.js:25850:20)
    at performConcurrentWorkOnRoot (react-dom.development.js:25750:22)
