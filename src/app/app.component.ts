import { Component, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DMmultilanguage';

  // constructor(private titleService: Title){
  //   this.titleService.setTitle($localize `${this.title}`);
  // }
  constructor(public translate: TranslateService) {
  }

  nameComponent = "Mirek";
  onChangeName(event: any) {
    console.log(event.target.value);
    this.nameComponent = event.target.value;
  }
}
