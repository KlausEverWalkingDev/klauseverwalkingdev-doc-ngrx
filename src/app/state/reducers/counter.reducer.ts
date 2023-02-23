import { createReducer, on } from '@ngrx/store'

import * as CounterActions from '../actions/counter.actions'

export const counterFeatureKey = 'counter'

export const initialCounterState = 0

export const counterReducer = createReducer(
	initialCounterState,

  on(CounterActions.increment, state => state + 1),

  on(CounterActions.decrement, state => state - 1),

  on(CounterActions.reset, _state => initialCounterState),
)
