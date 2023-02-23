import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { isDevMode } from '@angular/core'

import { Book } from '../../models/book'
import { booksReducer } from './books.reducer'
import { collectionReducer } from './collection.reducer'
import { counterReducer } from './counter.reducer'

export interface State {
  books: ReadonlyArray<Book>
  collection: ReadonlyArray<string>
  counter: number
}

export const reducers: ActionReducerMap<State> = {
  books: booksReducer,
  collection: collectionReducer,
  counter: counterReducer,
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : []
