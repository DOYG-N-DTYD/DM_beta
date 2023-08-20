import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CentralComponent } from './central/central.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageInterceptor } from './interceptors/language.interceptor';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes = [
  // { path: '', component: HomePageComponent },
  { path: 'test', component: TestPageComponent },
  { path: '', component: CentralComponent },
  { path: 'contact', component: FeedBackFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestPageComponent,
    HeaderComponent,
    CentralComponent,
    FooterComponent,
    FeedBackFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    //TranslateModule.forRoot(),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }, defaultLanguage: 'rus'
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }, HttpClient
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
