import { FC, ReactNode } from 'react';
import { TextComponent, TextComponentSize } from './style';

interface TextProps {
    children: ReactNode;
    size: TextComponentSize;
}

export const Text: FC<TextProps> = ({ children, size }) => {
    return <TextComponent size={size}>{children}</TextComponent>;
};
