import styled from 'styled-components';

export const PostSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        padding: 0.75rem 1rem;

        color: ${({ theme }) => theme.baseText};
        line-height: 1.6;
        font-size: 1rem;

        border: 1px solid ${({ theme }) => theme.baseBorder};
        border-radius: 6px;
        background: ${({ theme }) => theme.baseInput};
        transition: border-color 0.2s;

        &::placeholder {
            color: ${({ theme }) => theme.baseLabel};
        }

        &:hover {
            border-color: ${({ theme }) => theme.blue};
        }
    }
`;
