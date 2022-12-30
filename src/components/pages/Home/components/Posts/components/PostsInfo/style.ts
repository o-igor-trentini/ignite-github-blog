import styled from 'styled-components';

export const PostsInfoContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
        color: ${({ theme }) => theme.baseSubtitle};
    }

    span:last-child {
        color: ${({ theme }) => theme.baseSpan};
    }
`;
