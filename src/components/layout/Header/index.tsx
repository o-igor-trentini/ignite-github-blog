import { FC } from 'react';
import { HeaderContainer } from './style';
import coverSvg from '../../../assets/cover.svg';

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <img src={coverSvg} alt="" />
        </HeaderContainer>
    );
};
