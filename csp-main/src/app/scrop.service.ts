import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from'@angular/common/http';
import { Crop,UniqueConstraintError,InsertedSuccess ,Read } from './crop';
import { Observable } from 'rxjs';
interface InsertResponse {
  errorNum?: number;
}
@Injectable({
  providedIn: 'root'
})
export class ScropService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:8000/';

  Insert(
    Details:Crop
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'soilanalysis/Insert',
      Details,
      { headers:this.headers }
    );

  } 
  Read(soil_id:string):Observable<InsertedSuccess>{
    console.log(`${this.url}soilanalysis/Read${soil_id}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}soilanalysis/Read${soil_id}`
    );
  }
  
  Delete(soil_id:string):Observable<InsertedSuccess>{
    console.log(`${this.url}soilanalysis/Delete${soil_id}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}soilanalysis/Delete${soil_id}`
    );
  }
  Update(
    soil_id:string,Details:Crop) {
    return this.http.put(`${this.url }soilanalysis/Update${soil_id}`,Details,{headers:this.headers}
    );
}

ReadAll(): Observable<Read> {
  return this.http.get<Read>(`${this.url}/readAll`);
}
}
