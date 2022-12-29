import { FC } from 'react';
import { HomeContainer } from './style';
import { ProfileCard } from './components/ProfileCard';

export const Home: FC = () => {
    return (
        <HomeContainer>
            <ProfileCard />
        </HomeContainer>
    );
};
