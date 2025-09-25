import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
