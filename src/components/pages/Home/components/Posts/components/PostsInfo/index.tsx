import { FC } from 'react';
import { PostsInfoContainer } from './style';
import { Title } from '../../../../../../ui/Title';
import { Text } from '../../../../../../ui/Text';

// TODO: Implementar contagem dinâmicamente

export const PostsInfo: FC = () => {
    return (
        <PostsInfoContainer>
            <Title size="sm">Publicações</Title>

            <Text size="sm">{10000} Publicações</Text>
        </PostsInfoContainer>
    );
};
