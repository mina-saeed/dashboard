import { Component, OnInit } from '@angular/core';
import {users} from '../shared/users.service';

@Component({
  selector: 'allusers',
  templateUrl: './allusers.component.html'
})
export class allusers implements OnInit {

  constructor(private user: users) { }
		private allusers =[] 
    private usertype = []

		ngOnInit(){
			 this.user.getAllusers().subscribe(res=>{
         if(res){
			 	this.allusers = res
			 	return this.allusers
         }
         else{
           return false;
         }
			 })
		}

    Onacceptuser(useremail,index){
      const accepteduser = {
        email: useremail,
        active: '1',
        type: this.usertype[index]
      }
      this.user.acceptuser(accepteduser);
    }

}
