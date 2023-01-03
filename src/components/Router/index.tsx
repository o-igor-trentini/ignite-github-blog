import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Default } from '../layout/Default';
import { Home } from '../pages/Home';
import { Post } from '../pages/Post';

export const Router: FC = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const returnToHomeComponent = <Navigate to={baseUrl} />;

    return (
        <Routes>
            <Route path={baseUrl} element={<Default />}>
                <Route index element={<Home />} />

                <Route path="post">
                    <Route index element={returnToHomeComponent} />

                    <Route path=":number" element={<Post />} />
                </Route>
            </Route>

            <Route path="*" element={returnToHomeComponent} />
        </Routes>
    );
};
