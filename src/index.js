import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//importing pages
import App from "./App";
import Browse from "./components/Browse";
import SignInPage from "./components/SignInPage";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={appRouter} />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
