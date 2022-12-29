import styled from 'styled-components';

export type TextComponentSize = 'md' | 'sm';

interface TextComponentProps {
    size: TextComponentSize;
}

export const TextComponent = styled.span<TextComponentProps>`
    line-height: 1.6;
    font-weight: 400;
    font-size: ${({ size }) => (size === 'md' ? 1 : 0.875)}rem;
`;
