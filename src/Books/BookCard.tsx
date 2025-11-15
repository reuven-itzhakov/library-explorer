import { useEffect, useState } from "react";
import {Book} from "../types";
import "../Styles/BookCard.css";

function BookCard(book: Book) {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(book.id));
    }, [book.id]);

    const toggleFavorite = () => {
        const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(book.id)) {
            const updatedFavorites: string[] = favorites.filter((id: string) => id !== book.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            favorites.push(book.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div id={book.id} className="book-card">
            <button className="favorite-button" onClick={toggleFavorite} aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}>
                {isFavorite ?
                    <svg width="20px" height="20px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000" stroke-width="0.96"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#ff0000"></path> </g></svg>
                    :
                    <svg width="20px" height="20px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.96"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#ffffff"></path> </g></svg>
                }
            </button>
            <h2>{book.title}</h2>
            <h3>by {book.author} ({book.year})</h3>
            <p className="book-card-rating">Rating: {book.rating} / 5</p>
            <div className="book-card-tags">
                {book.tags.map(tag => (
                    <span key={tag} className="book-card-tag">{tag}</span>
                ))}
            </div>
            <p className="book-card-description">{book.description}</p>
        </div>
    ); 
}

export default BookCard;