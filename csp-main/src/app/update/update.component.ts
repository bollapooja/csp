
import { Component } from '@angular/core';
import {Crop,UniqueConstraintError,InsertedSuccess ,Read} from '../crop';
import {Subscription} from 'rxjs';
import { ScropService } from '../scrop.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  
  }




/*
  canShowData:boolean=false;
  constructor(private Service:ScropService) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:Crop ={
    soil_id:0,
    soil_type:'',
    soil_ph:0,
    organic_matter: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Read() {
    this.Subscription = this.Service.Read(this.User.soil_id).subscribe(
          (data)=>{
            if(data){
                this.canShowData=true;
                console.log(data);
                this.a=data.Result[0];
                this.User ={
                  soil_id:this.a[0],
                  soil_type:this.a[1],
                  soil_ph:this.a[2],
                  organic_matter:this.a[3],
                  nitrogen:this.a[4],
                  phosphorus:this.a[5],
                  potassium:this.a[6],
                  
                 };
                console.log(data.Result);
                console.log(this.a);

              }
            else{
                console.log("Failed");
              }
           }
        )
    }
    ngOnDestroy() {
      this.Subscription.unsubscribe();
    }
    

  
   Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Update(this.User.soil_id,this.User).subscribe(
        (data)=>{
          if(data){
            console.log(data);
            this.SuccessMsg="Updated Succesfully"
          }
          else{
            console.log("Failed");
            this.ErrorMsg="Failed Updating"
          }
        }
      )
    }*/
