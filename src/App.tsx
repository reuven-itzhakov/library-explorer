import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
// import BookCard from './BookCard';
import { Book } from './types';

function App() {

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Here I used a wrapper function to use async/await
    const fetchBooks = async () => { // Fetch the books data from the JSON file
      setLoading(true);
      try {
        const response = await fetch('./public/books.json');
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

  useMemo(() => {
    if (searchQuery === '') {
      return books;
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, books]);

  console.log(books);
  // const firstBook: Book = b;
  return (
    <>
    <div className="parent">
      <div className="div1">
        <img src="cydome_logo.png" alt="Cydome" className="logo"/>
        <h1>Library</h1>
      </div>
      <div className="div2">
            {/* FilterOptions */}
      </div>
      <div className="div3">
          {/* SearchBar */}
          {/* SortOptions */}
          {/* BookList */}
      </div>
      <div className="div4"> </div>
    </div>
    </>
  );
}

export default App;
