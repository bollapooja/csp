/*import { Component } from '@angular/core';
import {Crop1,UniqueConstraintError,InsertedSuccess ,Read} from '../crop1';
import {Subscription} from 'rxjs';
import { Scrop1Service } from '../scrop1.service';
@Component({
  selector: 'app-read1',
  templateUrl: './read1.component.html',
  styleUrls: ['./read1.component.css']
})
export class Read1Component {
  canShowData:boolean=false;
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
     a=[]
  
  insertUser(item:any){}
    Read() {
      this.Subscription = this.Service.Read(this.User.croprotation).subscribe(
        (data)=>{
          if(data){
              this.canShowData=true;
              console.log(data);
              this.a=data.Result[0];
              this.User ={
                croprotation:this.a[0],
                rainfalls:this.a[1],
                region:this.a[2],
                temperature:this.a[3],
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
      
  
}*/







import { Component, OnInit } from '@angular/core';
import {Crop1,UniqueConstraintError,InsertedSuccess ,Read} from '../crop1';
import {Subscription} from 'rxjs';
import { Scrop1Service } from '../scrop1.service';
@Component({
  selector: 'app-read1',
  templateUrl: './read1.component.html',
  styleUrls: ['./read1.component.css']
})
export class Read1Component implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: Scrop1Service) {}
 croprotation : string = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Crop1 = {
    croprotation:'',
    rainfalls:'',
    region:'',
    temperature:'',
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
          croprotation:this.a[0],
          rainfalls:this.a[1],
          region:this.a[2],
         temperature:this.a[3],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(croprotation: string) {
    this.Service.Read(croprotation).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(croprotation: string, Details: Crop1) {
    this.Service.Update(croprotation, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(croprotation: string) {
    this.Service.Delete(croprotation).subscribe({
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
