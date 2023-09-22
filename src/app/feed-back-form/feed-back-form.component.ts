//change translation of errors in DOM html manipulations

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSenderServiceService } from '../services/email-sender-service.service';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private emailService: EmailSenderServiceService, public translate: TranslateService) { 
    
  }

  feedBackForm: any = {
      name: '',
      email: '',
      text: ''
  };

  validateForm(){
    if (this.checkName() && this.checkEmail()) {
      console.log("Data ok, message will be sent to website" + " URL: " + this.baseUrl+this.simpleEmailEndPoint+this.emailReciever); // ##??
      this.emailService.sendEmail(this.baseUrl+this.simpleEmailEndPoint+this.emailReciever).subscribe(
        (response) => { this.responseFromService = response;},
        (error) => { console.log(error);});
    }else{
      console.log("fill all fields and check email address"); // ##?? 
    }
  }

  checkName(){
    let nameBmdInput = document.getElementById('nameBMD') as HTMLElement;
    let acceptOrError : boolean;
    this.feedBackForm.name ? acceptOrError = true : acceptOrError = false;
    this.changeStyleAfterChecking(nameBmdInput,acceptOrError,'FEEDBACKFORM.ERRORMESSAGE.NAME'); // {{'FEEDBACKFORM.ERRORMESSAGE.NAME' | translate}}"
    return acceptOrError;
  }
  checkEmail(){
    let emailBmdInput = document.getElementById('emailBMD') as HTMLElement;
    let pattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$');
    let acceptOrError : boolean;
    this.feedBackForm.email && pattern.test(this.feedBackForm.email) ? acceptOrError = true : acceptOrError = false;
    this.changeStyleAfterChecking(emailBmdInput,acceptOrError,'FEEDBACKFORM.ERRORMESSAGE.EMAIL'); // {{'FEEDBACKFORM.ERRORMESSAGE.EMAIL' | translate}}"
    return acceptOrError;
  }
  changeStyleAfterChecking(divForChange: HTMLElement, changeTrueOrFalse: boolean, errorMessage: string){
    this.checkOldDivErrors(divForChange);
    divForChange.style.borderStyle = 'solid';
    changeTrueOrFalse ? this.acceptGreenStyleForDiv(divForChange) : this.errorRedStyleForDiv(divForChange, errorMessage);
  }
  acceptGreenStyleForDiv(divForChange: HTMLElement){
    divForChange.style.borderColor = 'green';
  }
  errorRedStyleForDiv(divForChange: HTMLElement, errorMessage: string){
    divForChange.style.borderColor = 'red';
    divForChange.parentElement?.insertBefore(this.createErrorDiv(errorMessage),divForChange);
  }
  createErrorDiv(errorMessage: String){
    let err = document.createElement('divError') as HTMLElement;
        err.style.color = 'red';
        err.innerHTML = errorMessage.toString();
        return err;
  }
  checkOldDivErrors(divForChange: HTMLElement){
    Array.prototype.slice.call(document.getElementsByTagName('divError')).forEach(function(item) { 
      item.parentNode.removeChild(item); 
   } );
  }
}
