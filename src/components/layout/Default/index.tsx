import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DefaultContainer, DefaultContent } from './style';
import { Header } from '../Header';

export const Default: FC = () => {
    return (
        <DefaultContainer>
            <Header />

            <DefaultContent>
                <Outlet />
            </DefaultContent>
        </DefaultContainer>
    );
};
