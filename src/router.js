import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import WebWorkerExample from "./WebWorkerExample";
import IframeExample from "./IframeExample";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "webworker",
    element: <WebWorkerExample />,
  },
  {
    path: "iframe",
    element: <IframeExample />
  }
]);

export default router;