import { FC } from 'react';
import { PostsContainer, PostSearchContainer } from './style';
import { PostsInfo } from './components/PostsInfo';
import { PostSearch } from './components/PostSearch';
import { PostList } from './components/PostList';
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../../../../contexts/Posts';

export const Posts: FC = () => {
    const getPosts = useContextSelector(PostsContext, (context) => context.getPosts);

    const handleSearch = (query: string): void => getPosts(query);

    return (
        <PostsContainer>
            <PostSearchContainer>
                <PostsInfo />

                <PostSearch onSearch={handleSearch} />
            </PostSearchContainer>

            <PostList />
        </PostsContainer>
    );
};
