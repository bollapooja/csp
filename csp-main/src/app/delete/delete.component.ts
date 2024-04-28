


















import { Component, OnDestroy} from '@angular/core';
import {Crop,UniqueConstraintError,InsertedSuccess ,Read} from '../crop';
import {Subscription} from 'rxjs';
import { ScropService } from '../scrop.service';
import { Crop1 } from '../crop1';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  
}

/*
ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  constructor(private Service:ScropService) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:Crop ={
    soil_id: 0,
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

   Delete() {
    this.SuccessMsg='';
    this.ErrorMsg='';
    this.Subscription = this.Service.Delete(this.User.soil_id).subscribe(
      (data) => {
        console.log(data);
        this.SuccessMsg = "Deleted Successfully";
      },
      (error) => {
        console.error(error);
        this.ErrorMsg = "Failed Deleting";
      }
    );
        }*/