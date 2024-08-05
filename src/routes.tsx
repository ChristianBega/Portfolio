import App from "./App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/testing",
    element: <div>Hello world!</div>,
  },
]);
