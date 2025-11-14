export type Tag =
    | 'tech'
    | 'non-fiction'
    | 'fiction'
    | 'fantasy'
    | 'history'
    | 'self-help'
    | 'science';

export interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    rating: number; // 0–5
    tags: Tag[];
    description: string;
}

/*
I would recommended to change 'rating' to be like this:

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export interface Book {
    ...
    rating: Rating;
    ...
}

This would make it clearer that the rating can only be one of these values.
*/