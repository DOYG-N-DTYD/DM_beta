import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderServiceService {
  constructor(private httpClient: HttpClient) { }

  sendEmail(urlAddress: String):Observable<any>{
    return this.httpClient.put<any>(`${urlAddress}`,"PUT_REQUEST_BODY");
  }
}
