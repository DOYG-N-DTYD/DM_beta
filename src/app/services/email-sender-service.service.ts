import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderServiceService {
  private baseUrl = "http://localhost:8080/";
  private simpleEmailEndPoint = "simple-email/";
  private emailReciever = "testordersender@mzdev.webd.pro";

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.baseUrl+this.simpleEmailEndPoint+this.emailReciever);
  }

  sendEmail(){ //: Observable<any>
    //return this.httpClient.put(`${this.baseUrl+this.simpleEmailEndPoint+this.emailReciever}`,"test text");
    console.log(this.baseUrl+this.simpleEmailEndPoint+this.emailReciever);
    //return this.httpClient.put(`${this.baseUrl+this.simpleEmailEndPoint+this.emailReciever}`,"TEST POST");
    return this.httpClient.put(this.baseUrl+this.simpleEmailEndPoint+this.emailReciever,"TEXTBODY");
  }

  //this.httpClient.get<String>(`$(this.baseUrl)`);
}
