
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from'@angular/common/http';
import { Crop,UniqueConstraintError,InsertedSuccess ,Read } from './crop';
import { Observable } from 'rxjs';
import { Crop1 } from './crop1';
interface InsertResponse {
  errorNum?: number;
}
@Injectable({
  providedIn: 'root'
})
export class Scrop1Service {
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:8000/';

  Insert(
    Details:Crop1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'rainfalls/Insert',
      Details,
      { headers:this.headers }
    );

  } 
  Read(croprotation:string):Observable<InsertedSuccess>{
    console.log(`${this.url}rainfalls/Read${croprotation}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}rainfalls/Read${croprotation}`
    );
  }
  
  Delete(croprotation:string):Observable<InsertedSuccess>{
    console.log(`${this.url}rainfalls/Delete${croprotation}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}rainfalls/Delete${croprotation}`
    );
  }
  Update(
    croprotation:string,Details:Crop1) {
    return this.http.put(`${this.url }rainfalls/Update${croprotation}`,Details,{headers:this.headers}
    );
}
}