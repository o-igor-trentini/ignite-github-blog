import styled from 'styled-components';

export type TitleComponentSize = 'lg' | 'md' | 'sm';

interface TitleComponentProps {
    size: TitleComponentSize;
}

/*eslint-disable*/
export const TitleComponent = styled.span<TitleComponentProps>`
    font-weight: bold;

    font-size: ${({ size }) => {
        switch (size) {
            case 'lg':
                return 1.5;
            case 'md':
                return 1.25;
            case 'sm':
                return 1.125;
            default:
                return 1;
        }
    }}rem;
  
  line-height: ${({ size }) => (size === 'lg' ? 1.3 : 1.6)}}
`;
/*eslint-enable*/
