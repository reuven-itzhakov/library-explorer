import { ReactNode } from "react";

export type Tag =
    | 'tech'
    | 'non-fiction'
    | 'fiction'
    | 'fantasy'
    | 'history'
    | 'self-help'
    | 'science';

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

export interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    rating: number; // 0–5
    tags: Tag[];
    description: string;
}

export type SortOption =
    | 'A_TO_Z'
    | 'Z_TO_A'
    | 'RATING_LOW_TO_HIGH'
    | 'RATING_HIGH_TO_LOW';

export interface FilterTabProps {
    title: string;
    children: ReactNode;
    opened: boolean;
}

export interface ToggleItemProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface FilterFavoritesProps {
    showFavorites: boolean;
    onFilterChange: (showFavoritesOnly: boolean) => void;
}

export interface FilterTabSelectionProps {
    availableTags: Tag[];
    selectedTags: Tag[];
    onFilterChange: (selectedTags: Tag[]) => void;
}

export interface FilterTabStarsProps {
    minRating: number;
    onFilterChange: (minRating: number) => void;
}

export interface FilterOptionsProps {
    filterTabs: string[];
    availableTags: Tag[];
    onFiltersChange: (filters: {
        showFavoritesOnly: boolean;
        selectedTags: Tag[];
        minRating: number;
    }) => void;
}