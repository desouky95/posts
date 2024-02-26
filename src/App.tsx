import { RouterProvider } from "react-router-dom";
import router from "./core/router/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import "@src/styles/global.css";
import "sanitize.css";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
