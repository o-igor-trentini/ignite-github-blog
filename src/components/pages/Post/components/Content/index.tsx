import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentContainer } from './style';

interface ContentProps {
    body: string;
}

export const Content: FC<ContentProps> = ({ body }) => {
    return (
        <ContentContainer>
            <ReactMarkdown>{body}</ReactMarkdown>
        </ContentContainer>
    );
};
