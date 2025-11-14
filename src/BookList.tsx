import {Book} from './types';

import BookCard from './BookCard';

function BookList({ books }: { books: Book[] }) {

    return (
        <>
          {books.map((book, index) => (
            <BookCard {...book} key={index} />
          ))}
        </>
    );
}

export default BookList;