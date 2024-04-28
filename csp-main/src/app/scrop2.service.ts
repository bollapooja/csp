import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from'@angular/common/http';
import { Crop,UniqueConstraintError,InsertedSuccess ,Read } from './crop';
import { Observable } from 'rxjs';
import { Crop2 } from './crop2';

interface InsertResponse {
  errorNum?: number;
}
@Injectable({
  providedIn: 'root'
})
export class Scrop2Service {
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:8000/';

  Insert(
    Details:Crop2
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'fertilizers/Insert',
      Details,
      { headers:this.headers }
    );

  } 
  Read(crop_type:string):Observable<InsertedSuccess>{
    console.log(`${this.url}fertilizers/Read${crop_type}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}fertilizers/Read${crop_type}`
    );
  }
  
  Delete(crop_type:string):Observable<InsertedSuccess>{
    console.log(`${this.url}fertilizers/Delete${crop_type}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}fertilizers/Delete${crop_type}`
    );
  }
  Update(
    crop_type:string,Details:Crop2) {
    return this.http.put(`${this.url }fertilizers/Update${crop_type}`,Details,{headers:this.headers}
    );
}

}

