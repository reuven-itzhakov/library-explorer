import React, { useEffect, useMemo, useState } from 'react';
import './Styles/App.css';
import BookList from './Books/BookList';
import { Book, Tag } from './types';
import SortOptions from './SortOptions';
import { SortOption } from './types';
import SearchBar from './SearchBar';
import FilterOptions from './Filters/FilterOptions';

function App() {
  
  const availableTags: Tag[] = ['tech', 'non-fiction', 'fiction', 'fantasy', 'history', 'self-help', 'science'];
  const filterTabs: string[] = ['Favorites', 'Tags', 'Rating'];
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<SortOption>('A_TO_Z');
  const [filters, setFilters] = useState({
    showFavoritesOnly: false as boolean,
    selectedTags: [] as Tag[],
    minRating: 0 as number
  });

  useEffect(() => {
    // Here I used a wrapper function to use async/await
    const fetchBooks = async () => { // Fetch the books data from the JSON file
      setLoading(true);
      try {
        const response = await fetch('/books.json');
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Book[] = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
      setLoading(false);
    };
    fetchBooks();
  }, []);

  // Memoize filteredBooks to avoid unnecessary computations
  const filteredBooks = useMemo(() => {
    let retBooks: Book[] = [...books];
    if (searchQuery !== '') {
      retBooks = books.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    if (filters.showFavoritesOnly) {
      const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
      retBooks = retBooks.filter(book => favorites.includes(book.id));
    }
    if (filters.selectedTags.length > 0) {
      retBooks = retBooks.filter(book =>
        book.tags?.some(tag => filters.selectedTags.includes(tag))
      );
    }
    if (filters.minRating > 0) {
      retBooks = retBooks.filter(book => book.rating >= filters.minRating);
    }
    switch (sortOption) {
      case 'A_TO_Z':
        retBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z_TO_A':
        retBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'RATING_LOW_TO_HIGH':
        retBooks.sort((a, b) => a.rating - b.rating);
        break;
      case 'RATING_HIGH_TO_LOW':
        retBooks.sort((a, b) => b.rating - a.rating);
        break;
    }
    return retBooks;
  }, [searchQuery, books, sortOption, filters]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Library</h1>
      </header>
      
      <aside className="app-sidebar">
        <FilterOptions
          filterTabs={filterTabs}
          availableTags={availableTags}
          onFiltersChange={setFilters}
        />
      </aside>
      
      <main className="app-main">
        <div className="status-bar">
          <SearchBar setSearchQuery={setSearchQuery} />
          <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
        </div>
        {loading ? <p>Loading...</p> : <BookList books={filteredBooks} />}
      </main>
    </div>
  );
}

export default App;
