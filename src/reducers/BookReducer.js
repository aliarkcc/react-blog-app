import { v4 as uuidV4 } from 'uuid'

export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                id: uuidV4(),
                name: action.book.name,
                writer: action.book.writer
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}