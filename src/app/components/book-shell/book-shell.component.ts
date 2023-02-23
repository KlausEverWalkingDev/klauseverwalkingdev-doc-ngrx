import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BookCollectionComponent } from './book-collection/book-collection.component'
import { BookListComponent } from './book-list/book-list.component'
import { BooksActions, BooksAPIActions } from '../../state/actions/books.actions'
import { BooksService } from '../../services/books.service'
import { selectBooks, selectBooksCollection } from '../../state/selectors/books.selectors'

@Component({
  selector: 'kewd-book-shell',
  standalone: true,
  imports: [
    CommonModule,
    BookListComponent,
    BookCollectionComponent,
  ],
  template: `
    <h2>Books</h2>
    <kewd-book-list class='book-list'
                    [books]='(books$ | async)!'
                    (add)='onAdd($event)'>
    </kewd-book-list>
    
    <h2>My Collection</h2>
    <kewd-book-collection class='book-collection'
                          [books]='(bookCollection$ | async)!'
                          (remove)='onRemove($event)'>
    </kewd-book-collection>
  `,
  styles: [
  ]
})
export class BookShellComponent implements OnInit {
  books$ = this.store.select(selectBooks)
  bookCollection$ = this.store.select(selectBooksCollection)

  constructor(
    private booksService: BooksService,
    private store: Store,
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => {
        return this.store
          .dispatch(BooksAPIActions.retrievedBookList({ books }))
      })
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }))
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }))
  }
}
