import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSenderServiceService } from '../services/email-sender-service.service';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.sass']
})

export class FeedBackFormComponent {
  private baseUrl = "http://localhost:8080/";
  private simpleEmailEndPoint = "simple-email/";
  private emailReciever = "testordersender@mzdev.webd.pro";
  
  responseFromService : any; //##??

  constructor(private emailService: EmailSenderServiceService) { }

  // ngOnInit() {
  //   this.emailService.sendEmail().subscribe(
  //   (response) => { this.responseFromService = response; },
  //   (error) => { console.log(error); })
  // }

  feedBackForm: any = {
      name: '',
      email: '',
      text: ''
  };

  validateForm(){
    console.log("IN DATA NAME EMAIL TEXT"+this.feedBackForm.name + " " + this.feedBackForm.email +  " " + this.feedBackForm.text );
    let pattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$');
    if (this.feedBackForm.name && this.feedBackForm.email && this.feedBackForm.text && pattern.test(this.feedBackForm.email)) {
      console.log("Data ok, message will be sent to website" + " URL: " + this.baseUrl+this.simpleEmailEndPoint+this.emailReciever); // ##??
      this.emailService.sendEmail(this.baseUrl+this.simpleEmailEndPoint+this.emailReciever).subscribe(
        (response) => { this.responseFromService = response; },
        (error) => { console.log(error); });
    }else{
      console.log("fill all fields and check email address"); // ##?? 
    }
  }
}
