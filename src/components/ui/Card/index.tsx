import { FC, ReactNode } from 'react';
import { CardContainer, CardVariant } from './style';

interface CardProps {
    children: ReactNode;
    variant?: CardVariant;
    hover?: boolean;
    showShadow?: boolean;
}

export const Card: FC<CardProps> = ({ children, variant = 'default', hover = true, showShadow = false }) => {
    return (
        <CardContainer variant={variant} hover={hover} showShadow={showShadow}>
            {children}
        </CardContainer>
    );
};
