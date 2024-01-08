import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {

    const { dispatch } = useContext(BookContext)

    const [name, setName] = useState('')
    const [writer, setWriter] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: 'ADD_BOOK', book: { name: name, writer: writer } })

        setName('')
        setWriter('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Book Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type='text' placeholder='Book Writer Name' value={writer} onChange={(e) => setWriter(e.target.value)}></input>
                <input type='submit' value='Add Book'></input>
            </form>
        </div>
    )
}
