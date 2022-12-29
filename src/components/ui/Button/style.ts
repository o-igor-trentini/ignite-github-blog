import styled from 'styled-components';

export const ButtonComponent = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;

    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};

    border: 0;
    border-bottom: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    transition: border-bottom-color 0.2s;

    &:hover {
        border-bottom-color: ${({ theme }) => theme.blue};
    }
`;
