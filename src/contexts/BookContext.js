import React, { createContext, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const defaultBooks = [
        { id: 1, name: 'Sefiller', writer: 'Victor Hugo' },
        { id: 2, name: 'Yaban', writer: 'Yakup Kadri Karaosmanoğlu' },
    ]

    const [books, dispatch] = useReducer(BookReducer, defaultBooks)

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider