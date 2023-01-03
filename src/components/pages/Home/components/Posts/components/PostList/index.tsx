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
import { useNavigate } from 'react-router-dom';

export const PostList: FC = () => {
    const posts = useContextSelector(PostsContext, (context) => context.posts);
    const baseUrl = import.meta.env.BASE_URL;
    const navigate = useNavigate();

    const handleClickPost = (postNumber: number): void => navigate(baseUrl + 'post/' + postNumber);

    return (
        <PostListContainer>
            {posts.map(({ number, title, body, updated_at }) => (
                <Card key={number}>
                    <PostCardContainer onClick={() => handleClickPost(number)}>
                        <PostCardHeader>
                            <Title size="md">{title}</Title>

                            <span>
                                {formatDistanceToNow(new Date(updated_at), {
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
