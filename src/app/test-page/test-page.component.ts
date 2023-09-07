import { Component } from '@angular/core';

export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.sass']
})
export class TestPageComponent {
  title: string = "";
  price: number = 0;
  company: string = "";
   
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
   
  addPhone(){
      this.phones.push(new Phone(this.title, this.price, this.company));
  }
}
