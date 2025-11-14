import { FilterTabProps } from './types';
import { useState } from 'react';

function FilterTab({ title, children ,opened }: FilterTabProps) {

    const [isOpen, setIsOpen] = useState(opened);

    return (
        <div className="filter-tab">
        <button 
            className="filter-tab-header"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h3>{title}</h3>
            <span className="filter-tab-icon">{isOpen ? '🞃' : '🞂'}</span>
        </button>
        {isOpen && (
            <div className="filter-tab-content">
            {children}
            </div>
        )}
        </div>
    )
}

export default FilterTab;