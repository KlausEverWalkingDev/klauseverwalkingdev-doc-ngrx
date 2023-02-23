import { createReducer, on } from '@ngrx/store'

import { Book } from '../../models/book'
import { BooksAPIActions } from '../actions/books.actions'

export const initialBooksState: ReadonlyArray<Book> = []

export const booksReducer = createReducer(
  initialBooksState,

  on(BooksAPIActions.retrievedBookList,
	  (_state, { books }) => books,
  ),
)
