import { Component } from '@angular/core';


export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent {
  title: string = "";
  price: number = 0;
  company: string = "";
   
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
   
  addPhone(){
      this.phones.push(new Phone(this.title, this.price, this.company));
  }
}
