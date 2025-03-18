import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private httpclient:HttpClient) { }

  getAllData():Observable<any>{
    return this.httpclient.get("http://localhost:2000/products")
  }

  getDataByID(ID:number):Observable<any>{
    return this.httpclient.get(`http://localhost:2000/products/${ID}`)
  }

  deleteDataBYID(ID:number):Observable<void>{
    return this.httpclient.delete<void>(`http://localhost:2000/products/${ID}`)
  }

  addNewData(prd:any):Observable<any>{
    return this.httpclient.post("http://localhost:2000/products",prd)
  }

  EditData(prd:any , id:number):Observable<any>{
    return this.httpclient.put(`http://localhost:2000/products/${id}`,prd)
  }
}
