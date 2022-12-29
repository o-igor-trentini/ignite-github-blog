import { Profile } from './type';
import { AxiosResponse } from 'axios';
import { api } from '../../lib/axios';

export const getUserProfile = async (username: string): Promise<Profile> => {
    const { data }: AxiosResponse<Profile> = await api.get('/users/' + username);

    return data;
};

export const getUserTotalFollowers = async (username: string): Promise<number> => {
    const { data }: AxiosResponse<unknown[]> = await api.get(`users/${username}/followers`);

    return Array.isArray(data) ? data.length : 0;
};
