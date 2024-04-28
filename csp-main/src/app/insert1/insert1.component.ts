import { Component } from '@angular/core';
import {Crop1,UniqueConstraintError,InsertedSuccess ,Read} from '../crop1';
import {Subscription} from 'rxjs';
import { Scrop1Service } from '../scrop1.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-insert1',
  templateUrl: './insert1.component.html',
  styleUrls: ['./insert1.component.css']
})
export class Insert1Component {
  croprotation='';
  rainfalls='';
  region='';
  temperature='';


  insertUser(item:any){
    this.region=item.name;
    console.log(this.region);
}
  constructor(private Service:Scrop1Service) {}

  Subscription:Subscription=new Subscription();
   User:Crop1 ={
    croprotation:'',
      rainfalls:'',
      region:'',
      temperature:''
      
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"
          }
        }
        
      )
      form.reset();


    }
  
}
