import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Book } from "../../../models/book"

@Component({
  selector: 'kewd-book-collection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="book-item" *ngFor="let book of books">
      <p>{{book.volumeInfo.title}}</p>
      <span>by {{book.volumeInfo.authors}}</span>
      <button (click)="remove.emit(book.id)"
              data-test="remove-button">
        Remove from Collection
      </button>
    </div>
  `,
  styles: [
  ]
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = []
  @Output() remove = new EventEmitter<string>()
}
