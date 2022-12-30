import { FC } from 'react';
import { PostsContainer, PostSearchContainer } from './style';
import { PostsInfo } from './components/PostsInfo';
import { PostSearch } from './components/PostSearch';

export const Posts: FC = () => {
    const handleSearch = (query: string): void => console.log('### search query', query);

    return (
        <PostsContainer>
            <PostSearchContainer>
                <PostsInfo />

                <PostSearch onSearch={handleSearch} />
            </PostSearchContainer>
        </PostsContainer>
    );
};
