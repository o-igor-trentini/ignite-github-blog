import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Default } from '../layout/Default';
import { Home } from '../pages/Home';

export const Router: FC = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <Routes>
            <Route path={baseUrl} element={<Default />}>
                <Route index element={<Home />} />
            </Route>

            <Route path="*" element={<Navigate to={baseUrl} />} />
        </Routes>
    );
};
