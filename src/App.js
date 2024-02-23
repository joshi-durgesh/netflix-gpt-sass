import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <div>
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export default App;
