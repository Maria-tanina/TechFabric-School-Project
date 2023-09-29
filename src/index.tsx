import React from "react";
import ReactDOM from "react-dom/client";
import App from "@components/App";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "@helpers/scrollToTop";
import store from "./store";
import { Provider } from "react-redux";
import { NotificationProvider } from "@hooks/useNotification";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NotificationProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
