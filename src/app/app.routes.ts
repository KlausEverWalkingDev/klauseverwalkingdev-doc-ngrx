import { Routes } from '@angular/router'

export const APP_ROUTES: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: 'counter',
	// 	pathMatch: 'full',
	// },
	{
		path: 'counter',
		loadComponent: () =>
			import('./components/counter/counter.component')
				.then(m => m.CounterComponent)
	},
	{
		path: 'book',
		loadComponent: () =>
			import('./components/book-shell/book-shell.component')
				.then(m => m.BookShellComponent)
	},
]
