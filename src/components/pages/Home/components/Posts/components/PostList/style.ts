import styled from 'styled-components';

export const PostListContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const PostCardContainer = styled.div`
    height: 16.25rem;

    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1.25rem;

    cursor: pointer;
`;

export const PostCardHeader = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    span:first-child {
        color: ${({ theme }) => theme.baseTitle};
    }

    span:last-child {
        color: ${({ theme }) => theme.baseSpan};
    }
`;

export const PostCardDescription = styled.div`
    width: 100%;
    bottom: 0;

    span {
        display: -webkit-box;

        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal;

        color: ${({ theme }) => theme.baseText};
    }
`;
