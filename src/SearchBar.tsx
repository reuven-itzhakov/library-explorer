import { useState, useEffect } from 'react';

/*
Note: The search functionality is currently triggered by either the Search button or the "Enter" key.
I considered implementing instant search (searching on every input change),
but chose against it for better user experience (UX).
Implementing instant search would also require adding debouncing to prevent excessive
re-renders and unnecessary API calls.
*/

function SearchBar({setSearchQuery}: {setSearchQuery: (query: string) => void}) {

    const [inputValue, setInputValue] = useState<string>("");

    return(
        <div>
            <input
                type="text"
                placeholder="Search titles or authors" 
                className="search-bar"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        setSearchQuery(inputValue);
                    }
                }}
            />
            <button onClick={() => setSearchQuery(inputValue)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    )
}

export default SearchBar;