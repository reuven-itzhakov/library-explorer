import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import BookList from './BookList';
import { Book } from './types';
import SortOptions from './SortOptions';
import { SortOption } from './types';
import SearchBar from './SearchBar';

function App() {
 
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<SortOption>('A_TO_Z');

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
  }, [searchQuery, books, sortOption]);

  return (
  <div className="parent">
    <header className="header">
      <img src="cydome_logo.png" alt="Cydome" className="logo"/>
      <h1>Library</h1>
    </header>
    
    <aside className="sidebar-left">
      {/* FilterOptions */}
    </aside>
    
    <main className="main-content">
      <div className="status-bar">
        <SearchBar setSearchQuery={setSearchQuery} />
        <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <BookList books={filteredBooks} />
    </main>
    
    <aside className="sidebar-right">
    </aside>
  </div>
  );
}

export default App;
