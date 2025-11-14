import ToggleItem from '../ToggleItem';
import { FilterFavoritesProps } from '../types';



function FilterFavorites({ showFavorites, onFilterChange }: FilterFavoritesProps) {
  return (
    <div className="filter-favorites">
      <ToggleItem
        label="Show favorites only"
        checked={showFavorites}
        onChange={onFilterChange}
      />
    </div>
  );
}

export default FilterFavorites;