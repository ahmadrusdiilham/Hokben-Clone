import "./App.css";
import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import router from "./router";
import store from "./store/reducer/rootReducer";
function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </>
  );
}

export default App;
