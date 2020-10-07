import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //creating Topic or Subject
  //TypeScript supports generics
  private shareMessage:BehaviorSubject<String> = new BehaviorSubject(null);

  constructor() { }

  //this method will write message on above subject
  public setMessage(message:String){
    console.log("message = "+message);
      this.shareMessage.next(message);
  }

    //this method will subscribe the message of the subject
  public getObserable(): Observable<String> {
    //This returns Observable on Subject
    return this.shareMessage.asObservable();
 }
}
