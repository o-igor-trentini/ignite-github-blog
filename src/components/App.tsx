import { FC } from 'react';
import { defaultTheme } from '../styles/themes/default';
import { MainStyle } from '../styles/main';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { PostsProvider } from '../contexts/Posts';

export const App: FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MainStyle />

            <BrowserRouter>
                <PostsProvider>
                    <Router />
                </PostsProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
};
