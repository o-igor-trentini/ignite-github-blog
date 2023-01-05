import { Issue, TotalIssues } from '../service/issues/type';
import { createContext } from 'use-context-selector';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { getIssues } from '../service/issues/api';

export interface PostsContextType {
    posts: Issue[];
    totalCount: number;
    getPosts: (search?: string) => void;
}

export const PostsContext = createContext({} as PostsContextType);

interface PostsProviderProps {
    children: ReactNode;
}

export const PostsProvider: FC<PostsProviderProps> = ({ children }) => {
    const [posts, setPosts] = useState<TotalIssues>({ total_count: 0, items: [] });

    const getPosts = useCallback(async (search?: string) => {
        setPosts(await getIssues(search));
    }, []);

    useEffect(() => {
        getPosts().then();
    }, [getPosts]);

    return (
        <PostsContext.Provider value={{ posts: posts.items, totalCount: posts.total_count, getPosts }}>
            {children}
        </PostsContext.Provider>
    );
};
