import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSenderServiceService } from '../services/email-sender-service.service';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.sass']
})

export class FeedBackFormComponent {
  posts : any; //##??

  constructor(private emailService: EmailSenderServiceService) { }

  ngOnInit() {
    this.emailService.getPosts().subscribe(
    (response) => { this.posts = response; },
    (error) => { console.log(error); });
  }

  feedBackForm: any = {
      name: '',
      email: '',
      text: ''
  };

  validateForm(){
    console.log(this.feedBackForm.name);
    console.log("VALIDATION " + this.feedBackForm);
    let pattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$');
    if (this.feedBackForm.name && this.feedBackForm.email && this.feedBackForm.text && pattern.test(this.feedBackForm.email)) {
      //alert("Data ok, message will be sent to website"); // ##??
      this.emailService.sendEmail();
    }else{
      alert("fill all fields and check email address"); // ##?? 
    }
  }
}
