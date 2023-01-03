import styled from 'styled-components';

export const HeaderCardContainer = styled.header`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
`;

export const HeaderCardHeader = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderCardDescription = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    span {
        width: 100%;
    }
`;

export const HeaderCardDescriptionInformations = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    @media (max-width: 576px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const HeaderCardDescriptionInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;

    svg {
        font-size: 1.125rem;
        color: ${({ theme }) => theme.baseLabel};
    }

    span {
        color: ${({ theme }) => theme.baseSubtitle};
    }
`;
