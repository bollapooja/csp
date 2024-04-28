/*import { Component } from '@angular/core';
import {Crop2,UniqueConstraintError,InsertedSuccess ,Read} from '../crop2';
import {Subscription} from 'rxjs';
import { Scrop2Service } from '../scrop2.service';
@Component({
  selector: 'app-read2',
  templateUrl: './read2.component.html',
  styleUrls: ['./read2.component.css']
})
export class Read2Component {
  canShowData:boolean=false;
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
     a=[]
  
  insertUser(item:any){}
    Read() {
      this.Subscription = this.Service.Read(this.User.crop_type).subscribe(
        (data)=>{
          if(data){
              this.canShowData=true;
              console.log(data);
              this.a=data.Result[0];
              this.User ={
                crop_type:this.a[0],
                market_demand:this.a[1],
                cost_management:this.a[2],
                climate:this.a[3],
                profit:this.a[4],
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
      
}

*/



import { Component, OnInit } from '@angular/core';
import {Crop2,UniqueConstraintError,InsertedSuccess ,Read} from '../crop2';
import {Subscription} from 'rxjs';
import { Scrop2Service } from '../scrop2.service';
@Component({
  selector: 'app-read2',
  templateUrl: './read2.component.html',
  styleUrls: ['./read2.component.css']
})
export class Read2Component implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: Scrop2Service) {}
 crop_type : string = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Crop2 = {
    crop_type:'',
    market_demand:'',
    cost_management:'',
    climate:'',
    profit:''
  };
  Results = [];

  Read1(croprotation: string) {
    this.Service.Read(croprotation).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          crop_type:this.a[0],
          market_demand:this.a[1],
          cost_management:this.a[2],
          climate:this.a[3],
          profit:this.a[4],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(crop_type: string) {
    this.Service.Read(crop_type).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(crop_type: string, Details: Crop2) {
    this.Service.Update(this.crop_type, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(crop_type: string) {
    this.Service.Delete(crop_type).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
  }
}
