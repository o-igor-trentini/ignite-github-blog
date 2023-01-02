import { FC } from 'react';
import { PostsInfoContainer } from './style';
import { Title } from '../../../../../../ui/Title';
import { Text } from '../../../../../../ui/Text';
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../../../../../../contexts/Posts';

export const PostsInfo: FC = () => {
    const totalCount = useContextSelector(PostsContext, (context) => context.totalCount);

    return (
        <PostsInfoContainer>
            <Title size="sm">Publicações</Title>

            <Text size="sm">{totalCount} Publicações</Text>
        </PostsInfoContainer>
    );
};
