import { FC } from 'react';
import { PostSearchContainer } from './style';
import { debounce } from '../../../../../../../utils';

interface PostSearchProps {
    onSearch: (query: string) => void;
}

export const PostSearch: FC<PostSearchProps> = ({ onSearch }) => {
    const handleSearch = (query: string): void => onSearch(query);

    return (
        <PostSearchContainer>
            <input
                type="text"
                placeholder="Buscar conteúdo"
                onChange={debounce((evt) => handleSearch(evt.target.value))}
            />
        </PostSearchContainer>
    );
};
