import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DefaultContainer } from './style';
import { Header } from '../Header';

export const Default: FC = () => {
    return (
        <DefaultContainer>
            <Header />

            <div>
                <Outlet />
            </div>
        </DefaultContainer>
    );
};
