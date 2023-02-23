import { createActionGroup, props } from '@ngrx/store'

import { Book } from '../../models/book'

export const BooksActions = createActionGroup({
	source: 'Books',
	events: {
		'Add Book': props<{ bookId: string }>(),
		'Remove Book': props<{ bookId: string }>(),
	},
})

export const BooksAPIActions = createActionGroup({
	source: 'Books API',
	events: {
		'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
	},
})
