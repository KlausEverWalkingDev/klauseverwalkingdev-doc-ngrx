import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { map, Observable } from "rxjs"

import { Book } from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    const parameters = 'maxResults=5&orderBy=relevance&q=oliver%20sacks'

    return this.httpClient
      .get<{ items: Book[] }>(
        `https://www.googleapis.com/books/v1/volumes?${parameters}`)
      .pipe(map((books) => {
        return books.items || []
      }))
  }
}
