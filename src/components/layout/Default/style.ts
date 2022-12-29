import styled from 'styled-components';

export const DefaultContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DefaultContent = styled.div`
    width: 100%;
    padding: 0 18rem;
    margin-top: -6rem;

    @media (max-width: 1200px) {
        padding: 0 8rem;
    }

    @media (max-width: 992px) {
        padding: 0 4rem;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;
