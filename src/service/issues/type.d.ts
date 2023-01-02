export interface Issue {
    number: number;
    title: string;
    body: string;
    created_at: string;
}

export interface TotalIssues {
    total_count: number;
    items: Issue[];
}
