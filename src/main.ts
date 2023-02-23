import { bootstrapApplication } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { importProvidersFrom } from '@angular/core'
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'

import { APP_ROUTES } from './app/app.routes'
import { AppComponent } from './app/app.component'
import { metaReducers, reducers } from './app/state/reducers'

bootstrapApplication(AppComponent, {
  providers: [
    {provide: 'BASE_URL', useValue: 'http://localhost:4200'},
    provideAnimations(),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
    ),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      StoreModule.forRoot
      (reducers,
        {metaReducers}
      )
    ),
  ]
}).catch(err => console.error(err))
