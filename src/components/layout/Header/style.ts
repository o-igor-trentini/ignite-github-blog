import styled from 'styled-components';

export const HeaderContainer = styled.header`
    img {
        width: 100%;
        height: 18.5rem;

        object-fit: cover;

        @media (max-width: 1600px) {
            height: 14rem;
        }

        @media (min-width: 1921px) {
            height: auto;
        }
    }
`;
