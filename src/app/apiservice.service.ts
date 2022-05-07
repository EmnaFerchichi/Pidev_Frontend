import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {
   }

   //connect frontend to backend
   apiUrl='http://localhost:3000/qcm';
   apiUrl2='http://localhost:3000/course';
   



   //get all data course

   getAllData2(): Observable<any>
   {
     return this._http.get(`${this.apiUrl2}`);

   }



   //get all data qcm

   getAllData(): Observable<any>
   {
     return this._http.get(`${this.apiUrl}`);

   }
   //create data course
   createData2(data:any):Observable<any>{
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl2}`, data);
  }

   //create data qcm
   createData(data:any):Observable<any>{
     return this._http.post(`${this.apiUrl}`, data);
   }
   
   //delete data qcm
   deleteData(id_qcm:any): Observable<any>
   {
     let ids=id_qcm;
     return this._http.delete(`${this.apiUrl}/${ids}`);

   }
//delete data course
 deleteData2(id:any): Observable<any>
{
  let ids=id;
  return this._http.delete(`${this.apiUrl2}/${ids}`);

}


   //update data
   updateData(data:any,id_qcm:any):Observable<any>{
     let ids=id_qcm;
     return this._http.put(`${this.apiUrl}/${ids}`,data);
   }

    //update data course
    updateData2(data:any,id:any):Observable<any>{
      let ids=id;
      return this._http.put(`${this.apiUrl2}/${ids}`,data);
    }

    //getsingledata course
  getSingleData2(id:any):Observable<any>
  {
    let ids=id;
    return this._http.get(`${this.apiUrl2}/${ids}`);
  }
    //getsingledata qcm
  getSingleData(id_qcm:any):Observable<any>
  {
    let ids=id_qcm;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

}
