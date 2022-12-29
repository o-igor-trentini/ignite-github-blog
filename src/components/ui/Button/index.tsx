import { FC, ReactNode } from 'react';
import { ButtonComponent } from './style';

interface ButtonProps {
    children: ReactNode;
    icon?: { element: JSX.Element; addon: 'before' | 'after' };
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, icon, onClick }) => {
    return (
        <ButtonComponent type="button" onClick={onClick}>
            {icon?.addon === 'before' && icon.element}
            {children}
            {icon?.addon === 'after' && icon.element}
        </ButtonComponent>
    );
};
