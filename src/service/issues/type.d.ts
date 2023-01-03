export interface Issue {
    number: number;
    title: string;
    body: string;
    updated_at: string;
    html_url: string;
    user: {
        login: string;
    };
    comments: number;
}

export interface TotalIssues {
    total_count: number;
    items: Issue[];
}
