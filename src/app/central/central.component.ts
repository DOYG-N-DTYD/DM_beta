import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.sass']
})
export class CentralComponent {
  constructor(public translate: TranslateService) {
  }
}
