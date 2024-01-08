import React from 'react'

export default function BookDetails({ book, dispatch }) {
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            <div className='title'>{book.name}</div>
            <div className='auth'>{book.writer}</div>
        </li>
    )
}
