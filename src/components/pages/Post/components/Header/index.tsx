import { FC } from 'react';
import { Card } from '../../../../ui/Card';
import {
    HeaderCardContainer,
    HeaderCardDescription,
    HeaderCardDescriptionInfo,
    HeaderCardDescriptionInformations,
    HeaderCardHeader,
} from './style';
import { Button } from '../../../../ui/Button';
import { ArrowSquareUpRight, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from 'phosphor-react';
import { Title } from '../../../../ui/Title';
import { Text } from '../../../../ui/Text';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';

interface PostHeaderProps {
    title: string;
    author: string;
    commentsCount: number;
    updatedAt: string;
    postUrl: string;
}

export const PostHeaderCard: FC<PostHeaderProps> = ({ title, author, commentsCount, updatedAt, postUrl }) => {
    const navigate = useNavigate();
    const baseUrl = import.meta.env.BASE_URL;

    const handleBack = (): void => navigate(baseUrl);

    const handleLinkClick = (): void => {
        window.open(postUrl);
    };

    return (
        <Card variant="profile" showShadow hover={false}>
            <HeaderCardContainer>
                <HeaderCardHeader>
                    <Button icon={{ element: <CaretLeft weight="bold" />, addon: 'before' }} onClick={handleBack}>
                        Voltar
                    </Button>

                    <Button
                        icon={{ element: <ArrowSquareUpRight weight="bold" />, addon: 'after' }}
                        onClick={handleLinkClick}
                    >
                        Ver no GitHub
                    </Button>
                </HeaderCardHeader>

                <HeaderCardDescription>
                    <Title size="lg">{title}</Title>

                    <HeaderCardDescriptionInformations>
                        <HeaderCardDescriptionInfo>
                            <GithubLogo weight="fill" />

                            <Text size="md">{author}</Text>
                        </HeaderCardDescriptionInfo>

                        <HeaderCardDescriptionInfo>
                            <CalendarBlank weight="fill" />

                            <Text size="md">
                                {formatDistanceToNow(new Date(updatedAt), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
                            </Text>
                        </HeaderCardDescriptionInfo>

                        <HeaderCardDescriptionInfo>
                            <ChatCircle weight="fill" />

                            <Text size="md">{commentsCount} comentários</Text>
                        </HeaderCardDescriptionInfo>
                    </HeaderCardDescriptionInformations>
                </HeaderCardDescription>
            </HeaderCardContainer>
        </Card>
    );
};
