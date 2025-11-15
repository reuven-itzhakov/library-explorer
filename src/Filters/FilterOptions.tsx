import { useState, useMemo } from 'react';
import FilterTab from './FilterTab';
import FilterFavorites from './FilterFavorites';
import FilterTabSelection from './FilterTabSelection';
import FilterTabStars from './FilterTabStars';
import { FilterOptionsProps, Tag } from '../types';

function FilterOptions({ filterTabs, availableTags, onFiltersChange }: FilterOptionsProps) {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [minRating, setMinRating] = useState(0);

  // Notify parent whenever any filter changes
  useMemo(() => {
    onFiltersChange({ showFavoritesOnly, selectedTags, minRating });
  }, [showFavoritesOnly, selectedTags, minRating, onFiltersChange]);

  const handleClearAll = () => {
    setShowFavoritesOnly(false);
    setSelectedTags([]);
    setMinRating(0);
  };

  return (
    <div className="filter-options">
      <div className="filter-header">
        <h2>Filters</h2>
        <button onClick={handleClearAll} className="clear-button">
          Clear All
        </button>
      </div>

      {filterTabs.includes('Favorites') && (
        <FilterTab title="Favorites" opened={true}>
          <FilterFavorites
          showFavorites={showFavoritesOnly}
          onFilterChange={setShowFavoritesOnly} />
        </FilterTab>
      )}

      {filterTabs.includes('Tags') && (
        <FilterTab title="Tags" opened={true}>
          <FilterTabSelection 
            availableTags={availableTags}
            selectedTags={selectedTags}
            onFilterChange={setSelectedTags}
          />
        </FilterTab>
      )}

      {filterTabs.includes('Rating') && (
        <FilterTab title="Rating" opened={true}>
          <FilterTabStars
            minRating={minRating}
            onFilterChange={setMinRating} />
        </FilterTab>
      )}
    </div>
  );
}

export default FilterOptions;