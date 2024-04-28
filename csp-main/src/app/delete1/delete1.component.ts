import { Component } from '@angular/core';
import {Crop1,UniqueConstraintError,InsertedSuccess ,Read} from '../crop1';
import {Subscription} from 'rxjs';
import { Scrop1Service } from '../scrop1.service';
@Component({
  selector: 'app-delete1',
  templateUrl: './delete1.component.html',
  styleUrls: ['./delete1.component.css']
})
export class Delete1Component {
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  constructor(private Service:Scrop1Service) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:Crop1 ={
    croprotation:'',
    rainfalls:'',
    region:'',
    temperature:'',
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];

   Delete() {
    this.SuccessMsg='';
    this.ErrorMsg='';
    this.Subscription = this.Service.Delete(this.User.croprotation).subscribe(
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




















