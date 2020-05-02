import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  //inject httpclinet
  constructor(private http:HttpClient) { }

  //post user
  public doRegistration(user){
    //this is post request so adding usr object
     return this.http.post("http://localhost:8088/register",user,{responseType:'text' as 'json'});
  }

  //get user (list of all user)
  public getusers(){
    return this.http.get("http://localhost:8088/getAllUsers");
  }

  //get user (based on email)
  public getUserbyemail(email){
    return this.http.get("http://localhost:8088/findUser/"+email);
  }

  //delete user
  public deleteUser(id){
    return this.http.delete("http://localhost:8088/cancel/"+id);
  }

}
