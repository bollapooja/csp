
/*

import { Component } from '@angular/core';
import {Crop,UniqueConstraintError,InsertedSuccess ,Read} from '../crop';
import {Subscription} from 'rxjs';
import { ScropService } from '../scrop.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  soil_id=0;
  soil_type='';
  soil_ph=0;
  organic_matter=0;
  nitrogen=0;
    phosphorus=0;
    potassium=0;

  insertUser(item:any){
    this.soil_id=item.name;
    console.log(this.soil_id);
}
  constructor(private Service:ScropService) {}

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

/*import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Crop,
  UniqueConstraintError,
} from '../crop';
import { Subscription } from 'rxjs';
import { ScropService } from '../scrop.service';
interface InsertResponse {
  errorNum?: number;
}
export class InsertComponent implements OnInit, OnDestroy {
  constructor(private Service: ScropService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User = {
    soil_id: 0, // Assuming soil_id is of type number
    soil_type: '',
    organic_matter: 0, // Assuming organic_matter is of type number
    nitrogen: 0, // Assuming nitrogen is of type number
    phosphorus: 0, // Assuming phosphorus is of type number
    potassium: 0, // Assuming potassium is of type number
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert(this.User).subscribe(
      (data: InsertResponse) => {
        if ('errorNum' in data) {
          this.ErrorMsg = `${this.User.soil_id} already Exists`;
        } else {
          this.SuccessMsg = `${this.User.soil_id} Inserted Successfully`;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Crop,
  UniqueConstraintError,
} from '../crop';
import { Subscription } from 'rxjs';
import { ScropService } from '../scrop.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})

export class InsertComponent implements OnInit, OnDestroy {
  constructor(private Service: ScropService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Crop = {
    soil_id:'',
    soil_type:'',
    soil_ph:0,
    organic_matter: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    console.log("inserted succesfully");
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.soil_id} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.soil_id} Inserted Succesfully`;
        }
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}