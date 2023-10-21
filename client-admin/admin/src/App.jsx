import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/rootReducer";
function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
