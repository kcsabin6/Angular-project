import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  implements OnInit{
  @Input("pmessage")
  public message:String="hello";

  //variable created so that it can be used somwwhere else as well
  private messageService:MessageService;
  
     //@Autowire
   //public constructor(messageService:MessageService){
   // this.messageService= messageService;
    
  // }
  ngOnInit(): void {
   // this.messageService.getObserable().subscribe((message)=>{
   // this.message=message;
  //s  });
 }

  @Output()
  private updateMessage=new EventEmitter<String>();

  public processUsername(pusername): void{
   let value=pusername.value;
   console.log(value);
   this.updateMessage.emit(value);
 }

 public processMessage(msg):void{
  this.message=msg;
 }

}
