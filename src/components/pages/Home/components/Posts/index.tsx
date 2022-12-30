import { FC } from 'react';
import { PostsContainer, PostSearchContainer } from './style';
import { PostsInfo } from './components/PostsInfo';
import { PostSearch } from './components/PostSearch';
import { PostList } from './components/PostList';

export const Posts: FC = () => {
    const handleSearch = (query: string): void => console.log('### search query', query);

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
