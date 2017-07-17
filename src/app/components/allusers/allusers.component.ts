import { Component, OnInit } from '@angular/core';
import {users} from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'allusers',
  templateUrl: './allusers.component.html'
})
export class allusers implements OnInit {

  constructor(private user: users,private flashMessage: FlashMessagesService) { }
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
      if(this.usertype.length ==0){
        this.flashMessage.show('Please select a type', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
    }
      else{
      const accepteduser = {
        email: useremail,
        active: '1',
        type: this.usertype[index]
      }
      this.user.acceptuser(accepteduser).subscribe(res => {
		    this.flashMessage.show('User successfully confirmed', { cssClass: 'alert-success', timeout: 3000 })                     
        location.reload();
              });
        
    }
  }

}
