
/*import { Component } from '@angular/core';
import {Crop,UniqueConstraintError,InsertedSuccess ,Read} from '../crop';
import {Subscription} from 'rxjs';
import { ScropService } from '../scrop.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
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
     a=[]
  
  insertUser(item:any){}
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
      
  
  }







































  import { Component,OnInit } from '@angular/core';
  import {Crop,UniqueConstraintError,InsertedSuccess ,Read} from '../crop';
  import { ScropService } from '../scrop.service';
  import { Router } from '@angular/router';
  import { Location } from '@angular/common';
  
  @Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.css']
  })
  export class ReadComponent implements OnInit {
  
    ngOnInit(): void {
      this.Read('');
    }
    constructor(private Service: ScropService,private router:Router,private location: Location) {}
    soil_type : String = '';
    GotResult: Boolean = false;
    Results2=[];
    a=[];
    soil_id : number = 0;
    
    UpdatedUser: Crop = {
      soil_id:0,
    soil_type:'',
    soil_ph:0,
    organic_matter: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  
    };
    Results = [];
    Read1(soil_id: Number) {
      this.Service.Read(this.soil_id).subscribe({
        next: (Data: Read) => {
          this.Results2= Data.Result;
          for(let i=0;i<this.Results2.length;i++){
            this.a=this.Results2[i];
          }
          console.log(this.a);
          this.UpdatedUser={
            soil_id:this.a[0],
                soil_type:this.a[1],
                soil_ph:this.a[2],
                organic_matter:this.a[3],
                nitrogen:this.a[4],
                phosphorus:this.a[5],
                potassium:this.a[6],
          }
          console.log(this.UpdatedUser);
          this.GotResult = true;
        },
        error: (Err:any) => {
          console.log(Err);
        },
      });
  }
  
  Read(soil_id : Number) {
    this.Service.Read(this.soil_id).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        // this.UpdatedUser={
        //   s_no:this.Results[0],
        //   name:this.Results[1],
        //   contact_no:this.Results[2],
        //   no_of_people:this.Results[3],
        //   head:this.Results[4],
        //   location:this.Results[5],
        //   mail:this.Results[6]
        // }
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
  }
  Update(soil_id: Number, Details: Crop) {
    this.Service.Update(this.UpdatedUser.soil_id, Details).subscribe({
      next: (Data:any) => {
        console.log(Data);
        
      },
      error: (err:any) => {
        console.log(err);
      },
    });
  }
  Delete(soil_id: Number) {
  
  
      
    this.Service.Delete(this.soil_id).subscribe({
      next: (Data:any) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
    }



















// read.component.ts

import { Component, OnInit } from '@angular/core';
import { Crop, UniqueConstraintError, InsertedSuccess, Read } from '../crop';
import { ScropService } from '../scrop.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.ReadAll();
  }
  constructor(private Service: ScropService, private router: Router, private location: Location) {}
  GotResult: boolean = false;
  Results: Crop[] = [];
  UpdatedUser: Crop = {
    soil_id: 0,
    soil_type: '',
    soil_ph: 0,
    organic_matter: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  };





  ReadAll() {
    this.Service.ReadAll().subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
 
  a = [];
  soil_id: number = 0;

  
  

  Read1(soil_id: Number) {
    this.Service.Read(this.soil_id).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        if (this.Results.length > 0) {
          this.UpdatedUser = {
            soil_id: this.a[0],
            soil_type: this.a[1],
            soil_ph: this.a[2],
            organic_matter: this.a[3],
            nitrogen: this.a[4],
            phosphorus: this.a[5],
            potassium: this.a[6],
          };
          console.log(this.UpdatedUser);
        }
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
  Read(soil_id: Number) {
    this.Service.Read(this.soil_id).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }

  Update(soil_id: Number, Details: Crop) {
    this.Service.Update(this.UpdatedUser.soil_id, Details).subscribe({
      next: (Data: any) => {
        console.log(Data);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  Delete(soil_id: Number) {
    this.Service.Delete(this.soil_id).subscribe({
      next: (Data: any) => {
        console.log(Data.rowsAffected);
        this.Read(0); // Pass the default value for soil_id
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  // Rest of your code...
}























import { Component, OnInit } from '@angular/core';
import { Crop, UniqueConstraintError, InsertedSuccess, Read } from '../crop';
import { ScropService } from '../scrop.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read(''); // Pass the default value for soil_id
  }
  constructor(private Service: ScropService, private router: Router, private location: Location) {}
  soilanalysis: String = '';
  GotResult: Boolean = false;
  Results2 = [];
  a = [];
  soil_id: number = 0;
  UpdatedUser: Crop = {
    soil_id: 0,
    soil_type: '',
    soil_ph: 0,
    organic_matter: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  };
  Results = [];
  Read1(soilanalysis: String) {
    this.Service.Read(this.soil_id).subscribe({
      next: (Data: Read) => {
        this.Results2 = Data.Result;
        for (let i = 0; i < this.Results2.length; i++) {
          this.a = this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser = {
          soil_id: this.a[0],
          soil_type: this.a[1],
          soil_ph: this.a[2],
          organic_matter: this.a[3],
          nitrogen: this.a[4],
          phosphorus: this.a[5],
          potassium: this.a[6],
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
  Read(soil_type: String) {
    this.Service.Read(this.soil_id).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
  Update(soil_id: Number, Details: Crop) {
    this.Service.Update(this.UpdatedUser.soil_id, Details).subscribe({
      next: (Data: any) => {
        console.log(Data);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  Delete(soil_id: Number) {
    this.Service.Delete(this.soil_id).subscribe({
      next: (Data: any) => {
        console.log(Data.rowsAffected);
        this.Read(''); // Pass the default value for soil_id
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}






import { Component,OnInit } from '@angular/core';
import { Read, Crop , InsertedSuccess} from '../crop';
import { ScropService } from '../scrop.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  
  

  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: ScropService) {}
  Roll: String = '';
  GotResult: Boolean = false;
  Results2=[];
 
  
  UpdatedUser: Crop = {
   
    soil_id: 0,
    soil_type: '',
    soil_ph: 0,
    organic_matter: 0,
    nitrogen: 0,
    phosphorus: 0
  };
  Results=[];
  
  Read1(Roll: String) {

    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results2 = Data.Result;
        for (let i = 0; i < this.Results2.length; i++) {
          this.a = this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser = {
          soil_id: this.a[0],
          soil_type: this.a[1],
          soil_ph: this.a[2],
          organic_matter: this.a[3],
          nitrogen: this.a[4],
          phosphorus: this.a[5],
          potassium: this.a[6],
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
  
  
  
  
  
  
  
Read(Roll: String) {
  const soil_id = Number(Roll);
  this.Service.Read(soil_id).subscribe({
    next: (Data: Read) => {
      this.Results = Data.Result;
      // this.UpdatedUser={
      //   s_no:this.Results[0],
      //   name:this.Results[1],
      //   contact_no:this.Results[2],
      //   no_of_people:this.Results[3],
      //   head:this.Results[4],
      //   location:this.Results[5],
      //   mail:this.Results[6]
      // }
      this.GotResult = true;
    },
    error: (Err:any) => {
      console.log(Err);
    },
  });
}
Update(soil_id: String, Details: Crop) {
  this.Service.Update(this.UpdatedUser.soil_id, Details).subscribe({
    next: (Data:any) => {
      console.log(Data);
      
    },
    error: (err:any) => {
      console.log(err);
    },
  });
}
Delete(Roll: String) {

  const soil_id = Number(Roll);
    
  this.Service.Delete(soil_id).subscribe({
    next: (Data:any) => {
      console.log(Data.rowsAffected);
      this.Read('All');
    },
    error: (Error) => {
      console.log(Error);
    },
  });
}
  }
  








import { Component, OnInit } from '@angular/core';
import { ScropService } from '../scrop.service';
import { InsertedSuccess, Read, Crop } from '../crop';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: ScropService) {}
  Roll:String = '';
  GotResult : Boolean = false;
UpdatedUser : Crop = {
  soil_id: 0,
  soil_type: '',
  soil_ph: 0,
  organic_matter: 0,
  nitrogen: 0,
  phosphorus: 0,
  potassium: 0
};
  Results = [];
    
Read(Roll: String) {
  const soil_id = Number(Roll);
  this.Service.Read(soil_id).subscribe({
    next: (Data: Read) => {
      this.Results = Data.Result;
       this.UpdatedUser={
        soil_id:this.Results[0],
        soil_type:this.Results[1],
       soil_ph:this.Results[2],
        organic_matter:this.Results[3],
        nitrogen:this.Results[4],
       phosphorus:this.Results[5],
     potassium:this.Results[6]
      }
      this.GotResult = true;
    },
    error: (Err:any) => {
      console.log(Err);
    },
  });
}
Update(soil_id: String, Details: Crop) {
  this.Service.Update(this.UpdatedUser.soil_id, Details).subscribe({
    next: (Data:any) => {
      console.log(Data);
      
    },
    error: (err:any) => {
      console.log(err);
    },
  });
}
Delete(Roll: String) {

  const soil_id = Number(Roll);
    
  this.Service.Delete(soil_id).subscribe({
    next: (Data:any) => {
      console.log(Data.rowsAffected);
      this.Read('All');
    },
    error: (Error) => {
      console.log(Error);
    },
  });
}
}






import { Component, OnInit } from '@angular/core';
import {Crop,UniqueConstraintError,InsertedSuccess ,Read} from '../crop';
import {Subscription} from 'rxjs';
import { ScropService } from '../scrop.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: ScropService) {}
 soil_type : string = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Crop = {
    soil_id : 0,
    
   soil_type: '',
    soil_ph: 0,
   organic_matter: 0,
   nitrogen: 0,
   phosphorus: 0,
   potassium: 0,
  };
  Results = [];

  Read1(soil_type: string) {
    this.Service.Read(this.soil_type).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          soil_id:this.a[0],
          soil_type:this.a[1],
          soil_ph:this.a[2],
         organic_matter:this.a[3],
         nitrogen:this.a[4],
         phosphorus:this.a[5],
         potassium:this.a[6],
         
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(soil_type: string) {
    this.Service.Read(soil_type).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(soil_type: string, Details: Crop) {
    this.Service.Update(soil_type, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(soil_type: string) {
    this.Service.Delete(soil_type).subscribe({
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






Read(soil_id: number | string) {
  console.log('Read called with soil_id:', soil_id);

  if (soil_id == 'All') {
    this.Service.ReadAll().subscribe({
      next: (Data: Read) => {
        console.log('Read all values:', Data);
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log('Error in ReadAll:', Err);
      },
    });
  } else {
    this.Service.Read(Number(soil_id)).subscribe({
      next: (Data: Read) => {
        console.log('Read single value:', Data);
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log('Error in Read:', Err);
      },
    });
  }
}
Read(soil_id: number | string) {
  console.log('Read called with soil_id:', soil_id);

  if (soil_id == 'All') {
    this.Service.ReadAll().subscribe({
      next: (Data: Read) => {
        console.log('Read all values:', Data);
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log('Error in ReadAll:', Err);
      },
    });
  } else {
    this.Service.Read(Number(soil_id)).subscribe({
      next: (Data: Read) => {
        console.log('Read single value:', Data);
        this.Results = [Data.Result]; // Wrap the single result in an array to display it correctly in the table
        this.GotResult = true;
      },
      error: (Err) => {
        console.log('Error in Read:', Err);
      },
    });
  }
}

//now code
import { Component,OnInit } from '@angular/core';
import { ScropService } from '../scrop.service';
import { InsertedSuccess, Read, Crop} from '../crop';
  
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
    
  }
  constructor(private Service: ScropService) {}
soil_id: number = 0;
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Crop = {
    soil_id : 0,
   soil_type: '',
    soil_ph: 0,
   organic_matter: 0,
   nitrogen: 0,
   phosphorus: 0,
   potassium: 0,
  };
  Results = [];

  Read1(Roll: string) {
    const soil_id=Number(Roll);
    this.Service.Read(soil_id).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          soil_id:this.a[0],
          soil_type:this.a[1],
          soil_ph:this.a[2],
         organic_matter:this.a[3],
         nitrogen:this.a[4],
         phosphorus:this.a[5],
         potassium:this.a[6],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}

Read(soil_id: number | string) {
  console.log('Read called with soil_id:', soil_id);

  if (soil_id === 'All') {
    this.Service.ReadAll().subscribe({
      next: (Data: Read) => {
        console.log('Read all values:', Data);
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log('Error in ReadAll:', Err);
      },
    });
  } else {
    const id = Number(soil_id);
    this.Service.Read(id).subscribe({
      next: (Data: Read) => {
        console.log('Read single value:', Data);
        if (Data.Result && Data.Result.length > 0) {
          this.Results = Data.Result;
        } else {
          this.Results = []; // Set the Results array to an empty array when no data is found
        }
        this.GotResult = true;
      },
      error: (Err) => {
        console.log('Error in Read:', Err);
      },
    });
  }
}

  Update(soil_id:number, Details: Crop) {
    this.Service.Update(soil_id, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(soil_id: number) {
    this.Service.Delete(soil_id).subscribe({
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
*/



import { Component,OnInit } from '@angular/core';
import { ScropService } from '../scrop.service';
import { InsertedSuccess, Read, Crop} from '../crop';
  
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: ScropService) {}
 soil_id : string = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Crop = {
    soil_id:'',
    soil_type: '',
    soil_ph: 0,
   organic_matter: 0,
   nitrogen: 0,
   phosphorus: 0,
   potassium: 0,
    
  };
  Results = [];

  Read1(soil_id: string) {
    this.Service.Read(soil_id).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          soil_id:this.a[0],
          soil_type:this.a[1],
          soil_ph:this.a[2],
         organic_matter:this.a[3],
         nitrogen:this.a[4],
         phosphorus:this.a[5],
         potassium:this.a[6],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(soil_id: string) {
    this.Service.Read(soil_id).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(soil_id: string, Details: Crop) {
    this.Service.Update(soil_id, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(soil_id: string) {
    this.Service.Delete(soil_id).subscribe({
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











