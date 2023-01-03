import styled from 'styled-components';

export type CardVariant = 'default' | 'profile';

interface CardContainerProps {
    variant?: CardVariant;
    hover?: boolean;
    showShadow?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
    width: 100%;
    padding: ${({ variant }) => (variant === 'profile' ? '2rem' : '1.25rem 1rem')};

    border: 1px solid ${({ theme }) => theme.basePost};
    border-radius: 10px;
    background: ${({ theme, variant }) => (variant === 'profile' ? theme.baseProfile : theme.basePost)};
    transition: border-color 0.2s;

    box-shadow: ${({ showShadow }) => (showShadow ? '0px 2px 28px rgba(0, 0, 0, 0.2)' : 'none')};

    &:hover {
        border-color: ${({ theme, hover }) => (hover ? theme.baseLabel : theme.basePost)};
    }
`;
