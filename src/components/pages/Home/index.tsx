import { FC } from 'react';
import { HomeContainer } from './style';
import { ProfileCard } from './components/ProfileCard';
import { Posts } from './components/Posts';

export const Home: FC = () => {
    return (
        <HomeContainer>
            <ProfileCard />

            <Posts />
        </HomeContainer>
    );
};
