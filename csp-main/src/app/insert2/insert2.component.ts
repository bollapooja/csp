import { Component } from '@angular/core';
import {Crop2,UniqueConstraintError,InsertedSuccess ,Read} from '../crop2';
import {Subscription} from 'rxjs';
import { Scrop2Service } from '../scrop2.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-insert2',
  templateUrl: './insert2.component.html',
  styleUrls: ['./insert2.component.css']
})
export class Insert2Component {
crop_type='';
  market_demand='';
  cost_management='';
  climate='';
  profit='';

  insertUser(item:any){
    this.crop_type=item.name;
    console.log(this.crop_type);
}
  constructor(private Service:Scrop2Service) {}

  Subscription:Subscription=new Subscription();
   User:Crop2 ={
    crop_type:'',
    market_demand:'',
    cost_management:'',
    climate:'',
    profit:'',
      
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


