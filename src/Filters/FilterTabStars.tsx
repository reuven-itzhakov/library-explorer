import { FilterTabStarsProps } from '../types';
import '../Styles/FilterTabStars.css';

function FilterTabStars({ minRating, onFilterChange }: FilterTabStarsProps) {

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map(rating => (
      <button
        key={rating}
        className={`star-button ${minRating >= rating ? 'active' : ''}`}
        onClick={() => onFilterChange(rating)}
        aria-label={`${rating} stars minimum`}
      >
        {minRating >= rating ? '★' : '☆'}
      </button>
    ));
  };

  return (
    <div className="filter-stars">
      <div className="stars-container">
        {renderStars()}
      </div>
      <p className="stars-label">
        {minRating === 0 
          ? 'All ratings' 
          : `${minRating}+ star${minRating > 1 ? 's' : ''} minimum`}
      </p>
    </div>
  );
}

export default FilterTabStars;