import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;

        border-radius: 8px;
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const ProfileDescription = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProfileDescriptionTitle = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    span {
        color: ${({ theme }) => theme.white};
    }
`;

export const ProfileDescriptionBio = styled.div`
    width: 100%;

    color: ${({ theme }) => theme.baseText};
`;

export const ProfileDescriptionInformations = styled.div`
    width: 100%;
    margin-top: 1.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
    gap: 1.5rem;

    @media (max-width: 768px) {
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const ProfileDescriptionInfo = styled.div`
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
