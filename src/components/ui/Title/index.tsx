import { FC, ReactNode } from 'react';
import { TitleComponent, TitleComponentSize } from './style';

interface TitleProps {
    children: ReactNode;
    size: TitleComponentSize;
}

export const Title: FC<TitleProps> = ({ children, size }) => {
    return <TitleComponent size={size}>{children}</TitleComponent>;
};
