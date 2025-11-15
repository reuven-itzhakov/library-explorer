import {Book} from '../types';
import BookCard from './BookCard';
import '../Styles/BookList.css';

function BookList({ books }: { books: Book[] }) {

    if (books.length === 0) {
        return (
            <div className="book-list-empty">
                <h3>No books found</h3>
                <p>Try adjusting your filters or search query</p>
            </div>
        );
    }

    return (
        <div className="book-list">
            {books.map((book) => (
                <BookCard {...book} key={book.id} />
            ))}
        </div>
    );
}

export default BookList;