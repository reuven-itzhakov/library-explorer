import {Book} from "./types";
import "./index.css";

function BookCard(book: Book) {
    return (
        <div id={book.id} className="book-card">
            <h2>{book.title}</h2>
            <h3>by {book.author} ({book.year})</h3>
            <p>Rating: {book.rating} / 5</p>
            <p>Tags: {book.tags.join(', ')}</p>
            <p>{book.description}</p>
        </div>
    ); 
}

export default BookCard;