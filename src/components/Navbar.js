import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function Navbar() {

    const { books } = useContext(BookContext)

    return (
        <div className='navbar'>
            <h1>AOS Book List</h1>
            <p>There are currently {books.length} books available</p>
        </div>
    )
}
