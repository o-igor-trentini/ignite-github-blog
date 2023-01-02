import { FC } from 'react';
import { PostCardContainer, PostCardDescription, PostCardHeader, PostListContainer } from './style';
import { Card } from '../../../../../../ui/Card';
import { Title } from '../../../../../../ui/Title';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Text } from '../../../../../../ui/Text';
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../../../../../../contexts/Posts';
import { basicRemoveMarkDown } from '../../../../../../../utils';

export const PostList: FC = () => {
    const posts = useContextSelector(PostsContext, (context) => context.posts);

    const handleClickPost = (postNumber: number): void => {
        alert('Abrindo post: ' + postNumber);
    };

    return (
        <PostListContainer>
            {posts.map(({ number, title, body, created_at }) => (
                <Card key={number}>
                    <PostCardContainer onClick={() => handleClickPost(number)}>
                        <PostCardHeader>
                            <Title size="md">{title}</Title>

                            <span>
                                {formatDistanceToNow(new Date(created_at), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
                            </span>
                        </PostCardHeader>

                        <PostCardDescription>
                            <Text size="md">{basicRemoveMarkDown(body)}</Text>
                        </PostCardDescription>
                    </PostCardContainer>
                </Card>
            ))}
        </PostListContainer>
    );
};
