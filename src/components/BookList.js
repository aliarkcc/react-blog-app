import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

export default function BookList() {

    const { books, dispatch } = useContext(BookContext)

    return books.length ? (
        <div className='book-list'>
            <ul>
                {books && books.map((book) => {
                    return <BookDetails book={book} key={book.id} dispatch={dispatch}></BookDetails>
                })}
            </ul >
        </div>
    ) : (
        <div className='empty'>Books Not Found!</div>
    )
}
