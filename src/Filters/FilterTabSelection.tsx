import { useState, useEffect } from 'react';
import ToggleItem from '../ToggleItem';
import {FilterTabSelectionProps, Tag} from '../types';

function FilterTabSelection({ availableTags, selectedTags, onFilterChange }: FilterTabSelectionProps) {
  const handleToggle = (tag: Tag, checked: boolean) => {
    const newTags = checked 
      ? [...selectedTags, tag] 
      : selectedTags.filter(t => t !== tag);
    onFilterChange(newTags);
  };

  return (
    <div className="filter-tag-selection">
      {availableTags.map(tag => (
        <ToggleItem
          key={tag}
          label={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleToggle(tag, checked)}
        />
      ))}
    </div>
  );
}

export default FilterTabSelection;