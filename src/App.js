import {GlobalStyle} from "./global/Reset";
import {Layout} from "./components/Layout/Layout";
import {ThemeProvider} from "styled-components";
import * as theme from './global/theme';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Layout/>
            </ThemeProvider>
        </>
    )
}