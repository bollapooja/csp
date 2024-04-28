import { Component } from '@angular/core';
import {Crop2,UniqueConstraintError,InsertedSuccess ,Read} from '../crop2';
import {Subscription} from 'rxjs';
import { Scrop2Service } from '../scrop2.service';
@Component({
  selector: 'app-delete2',
  templateUrl: './delete2.component.html',
  styleUrls: ['./delete2.component.css']
})
export class Delete2Component {
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  constructor(private Service:Scrop2Service) {}
   ngOnInit() {
   }
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

   Delete() {
    this.SuccessMsg='';
    this.ErrorMsg='';
    this.Subscription = this.Service.Delete(this.User.crop_type).subscribe(
      (data) => {
        console.log(data);
        this.SuccessMsg = "Deleted Successfully";
      },
      (error) => {
        console.error(error);
        this.ErrorMsg = "Failed Deleting";
      }
    );
        }
}






















