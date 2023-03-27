import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CentralComponent } from './central/central.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'test', component: TestPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestPageComponent,
    HeaderComponent,
    FooterComponent,
    CentralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
