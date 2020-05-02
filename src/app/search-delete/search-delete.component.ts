import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:string; //for mapping of ngMode to get the email Id by 2 way binding
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {

    let resp= this.service.getusers();
    resp.subscribe((data)=>this.users=data);
  }

  //subscribe to users as after delete it will return remianing list of users
  public deleteUser(id:number){
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data)
  }

  //seacrh user by email id
  public SearchUserByEmail(){
    let resp=this.service.getUserbyemail(this.email); // email form html form by 2 way binding
    resp.subscribe((data)=>this.users=data)
  }

}
