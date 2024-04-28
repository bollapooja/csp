
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crop2, UniqueConstraintError, InsertedSuccess, Read } from '../crop2';
import { Subscription } from 'rxjs';
import { Scrop2Service } from '../scrop2.service';
@Component({
  selector: 'app-update2',
  templateUrl: './update2.component.html',
  styleUrls: ['./update2.component.css']
})
export class Update2Component implements OnInit, OnDestroy {
  canShowData: boolean = false;
  User: Crop2 = {
    crop_type:'',
      market_demand:'',
      cost_management:'',
      climate:'',
      profit:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  a: any[] = [];
  Subscription: Subscription = new Subscription();

  constructor(private Service: Scrop2Service) {}

  ngOnInit() {}

  Read() {
    this.Subscription = this.Service.Read(this.User.crop_type).subscribe((data) => {
      if (data) {
        this.canShowData = true;
        console.log(data);
        this.a = data.Result[0];
        this.User = {
          crop_type:this.a[0],
          market_demand:this.a[1],
          cost_management:this.a[2],
          climate:this.a[3],
          profit:this.a[4],
        };
        console.log(data.Result);
        console.log(this.a);
      } else {
        console.log("Failed");
      }
    });
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  Update() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Update(this.User.crop_type, this.User).subscribe(
      (data) => {
        if (data) {
          console.log(data);
          this.SuccessMsg = "Updated Successfully";
        } else {
          console.log("Failed");
          this.ErrorMsg = "Failed Updating";
        }
      }
    );
  }
}

