import { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PostContainer } from './style';
import { PostHeaderCard } from './components/Header';
import { Issue } from '../../../service/issues/type';
import { getIssue } from '../../../service/issues/api';
import { CircleNotch } from 'phosphor-react';

export const Post: FC = () => {
    const [post, setPost] = useState<Issue | null>(null);
    const { number } = useParams();
    const baseUrl = import.meta.env.BASE_URL;

    useEffect(() => {
        if (number) getIssue(+number).then(setPost);
    }, []);

    if (isNaN(Number(number))) return <Navigate to={baseUrl} />;

    if (post === null) return <CircleNotch size={32} weight="bold" />;

    return (
        <PostContainer>
            <PostHeaderCard
                title={post.title}
                author={post.user.login}
                commentsCount={post.comments}
                updatedAt={post.updated_at}
                postUrl={post.html_url}
            />
        </PostContainer>
    );
};
