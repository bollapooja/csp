import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crop1, UniqueConstraintError, InsertedSuccess, Read } from '../crop1';
import { Subscription } from 'rxjs';
import { Scrop1Service } from '../scrop1.service';

@Component({
  selector: 'app-update1',
  templateUrl: './update1.component.html',
  styleUrls: ['./update1.component.css']
})
export class Update1Component implements OnInit, OnDestroy {
  canShowData: boolean = false;
  User: Crop1 = {
    croprotation: '',
    rainfalls: '',
    region: '',
    temperature: ''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  a: any[] = [];
  Subscription: Subscription = new Subscription();

  constructor(private Service: Scrop1Service) {}

  ngOnInit() {}

  Read() {
    this.Subscription = this.Service.Read(this.User.croprotation).subscribe((data) => {
      if (data) {
        this.canShowData = true;
        console.log(data);
        this.a = data.Result[0];
        this.User = {
          croprotation: this.a[0],
          rainfalls: this.a[1],
          region: this.a[2],
          temperature: this.a[3]
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
    this.Subscription = this.Service.Update(this.User.croprotation, this.User).subscribe(
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
