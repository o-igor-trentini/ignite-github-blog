import { FC, useEffect, useState } from 'react';
import { Card } from '../../../../ui/Card';
import {
    ProfileContainer,
    ProfileDescription,
    ProfileDescriptionBio,
    ProfileDescriptionInfo,
    ProfileDescriptionInformations,
    ProfileDescriptionTitle,
} from './style';
import { Profile } from '../../../../../service/profile/type';
import { getUserProfile, getUserTotalFollowers } from '../../../../../service/profile/api';
import { Button } from '../../../../ui/Button';
import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from 'phosphor-react';
import { Title } from '../../../../ui/Title';
import { Text } from '../../../../ui/Text';

export const ProfileCard: FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [totalFollowars, setTotalFollowers] = useState<number>(0);

    const handleLinkClick = (): void => {
        window.open(profile?.html_url ?? '');
    };

    useEffect(() => {
        const userName = 'o-igor-trentini';
        getUserProfile(userName).then(setProfile);
        getUserTotalFollowers(userName).then(setTotalFollowers);
    }, []);

    return (
        <Card variant="profile" showShadow hover={false}>
            <ProfileContainer>
                <img src={profile?.avatar_url} alt="" />

                <ProfileDescription>
                    <ProfileDescriptionTitle>
                        <Title size="lg">{profile?.name}</Title>

                        <Button
                            icon={{ element: <ArrowSquareUpRight weight="bold" />, addon: 'after' }}
                            onClick={handleLinkClick}
                        >
                            GitHub
                        </Button>
                    </ProfileDescriptionTitle>

                    <ProfileDescriptionBio>
                        <Text size="md">{profile?.bio}</Text>
                    </ProfileDescriptionBio>

                    <ProfileDescriptionInformations>
                        <ProfileDescriptionInfo>
                            <GithubLogo weight="fill" />
                            <Text size="md">{profile?.login}</Text>
                        </ProfileDescriptionInfo>

                        {profile?.company && (
                            <ProfileDescriptionInfo>
                                <Buildings weight="fill" />
                                <Text size="md">{profile?.company}</Text>
                            </ProfileDescriptionInfo>
                        )}

                        <ProfileDescriptionInfo>
                            <Users weight="fill" />
                            <Text size="md">{`${totalFollowars} ${
                                totalFollowars > 0 ? 'seguidores' : 'seguidor'
                            }`}</Text>
                        </ProfileDescriptionInfo>
                    </ProfileDescriptionInformations>
                </ProfileDescription>
            </ProfileContainer>
        </Card>
    );
};
