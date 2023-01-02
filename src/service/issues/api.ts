import { AxiosResponse } from 'axios';
import { api } from '../../lib/axios';
import { Issue, TotalIssues } from './type';

const auth = 'Bearer ' + import.meta.env.VITE_GITHUB_API_TOKEN;

export const getIssues = async (search?: string): Promise<TotalIssues> => {
    const { data }: AxiosResponse<TotalIssues> = await api.get(
        `/search/issues?q=${search ?? ''}repo:o-igor-trentini/ignite-github-blog`,
        { headers: { Authorization: auth } },
    );

    return data;
};

export const getIssue = async (number: number): Promise<Issue> => {
    const { data }: AxiosResponse<Issue> = await api.get('/repos/o-igor-trentini/ignite-github-blog/issues/' + number);

    return data;
};
