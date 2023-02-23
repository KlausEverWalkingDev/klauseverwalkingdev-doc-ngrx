import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

import { decrement, increment, reset } from '../../state/actions/counter.actions'

@Component({
  selector: 'kewd-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="incrementCounter()">Increment</button>
    <div>Current Count: {{ counter$ | async }}</div>
    <button (click)="decrementCounter()">Decrement</button>
    <button (click)="resetCounter()">Reset</button>
  `,
  styles: []
})
export class CounterComponent {
  counter$: Observable<number>

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select('counter')
  }

  incrementCounter() {
    this.store.dispatch(increment())
  }

  decrementCounter() {
    this.store.dispatch(decrement())
  }

  resetCounter() {
    this.store.dispatch(reset())
  }
}
