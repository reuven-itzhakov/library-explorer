import {Book} from './types';

function BookList(books: Book[]) {

    

    return (
        <>
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </>
    );
}

export default BookList;