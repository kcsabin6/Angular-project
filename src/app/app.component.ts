import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MessageService } from './services/message.service';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title:String = 'banking-ui';
  public message:String ="";
  //In TypeScript we can write all the javascript code!!!!!!
 //public  welcome:String ="Nepal is a beautiful country............";
   welcome="Nepal is a beautiful country............";
   
   //variable created so that it can be used somwwhere else as well
   private messageService:MessageService;
  
   public btnMessage="Comming soon !!!!!";

   @ViewChild(StudentComponent)
   public studentChild:StudentComponent;

   public changeMessage(msg){
    this.btnMessage=msg;
    this.studentChild.processMessage("This is from parent (view child method !)");
   }
  
   //@Autowire
 public constructor(messageService:MessageService){
  this.messageService= messageService;
  this.welcome="This is Japan !!!!!!!";
 }

 public ngOnInit() : void {
  this.welcome="This is USA !!!!!!!!";
 }

 public authUser(username,password){
   console.log(username.value);
   console.log(password.value);

  if(username.value==="javahunk21@gmail.com" && password.value==="cool"){
    //console.log("User verified")
    this.message="User verified";
    this.messageService.setMessage("User verified");
  }
  else{
    //console.log("sorry not verified!")
    this.message="sorry not verified!";
    this.messageService.setMessage("sorry not verified!");
  }
 // console.log("Hey user!!!!!");
 }
}
