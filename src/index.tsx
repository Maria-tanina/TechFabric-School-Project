import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "@components/App";
import {ThemeProvider} from "styled-components";
import theme from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
