import { useState } from 'react';
import { SortOption } from './types';

function SortOptions({sortOption, setSortOption}: {sortOption: SortOption, setSortOption: (option: SortOption) => void}) {

    return (
        <div>
            <label htmlFor="sort-select">Sort by: </label>
            <select
                id="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
            >
                <option value="A_TO_Z">A to Z</option>
                <option value="Z_TO_A">Z to A</option>
                <option value="RATING_LOW_TO_HIGH">Rating: Low to High</option>
                <option value="RATING_HIGH_TO_LOW">Rating: High to Low</option>
            </select>
        </div>
    );
}

export default SortOptions;