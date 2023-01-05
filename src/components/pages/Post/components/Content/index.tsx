import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentContainer } from './style';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';

interface ContentProps {
    body: string;
}

export const Content: FC<ContentProps> = ({ body }) => {
    const CodeRenderer = (props: any) => {
        return (
            <SyntaxHighlighter language={props.className ? props.className.split('-')[1] : ''} style={atomDark}>
                {props.children}
            </SyntaxHighlighter>
        );
    };

    return (
        <ContentContainer>
            <ReactMarkdown rehypePlugins={[gfm]} components={{ code: ({ ...props }) => <CodeRenderer {...props} /> }}>
                {body}
            </ReactMarkdown>
        </ContentContainer>
    );
};
