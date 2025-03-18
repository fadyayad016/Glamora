import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicUserService {

  constructor(private httpclient:HttpClient) { }

  GetAllUser():Observable<any>{
    return this.httpclient.get("http://localhost:3000/users")

  }

  GetUserById(ID:number):Observable<any>{
    return this.httpclient.get(`http://localhost:3000/users/${ID}`)

  }

  DeleteUserById(ID:number):Observable<void>{
    return this.httpclient.delete<void>(`http://localhost:3000/users/${ID}`)
  }

  AddNewUser(user:any):Observable<any>{
    return this.httpclient.post("http://localhost:3000/users",user)
  }

  EditUser(user:any , id:number):Observable<any>{
    return this.httpclient.put(`http://localhost:3000/users/${id}`,user)
  }
}
