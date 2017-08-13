import { Component, OnInit } from '@angular/core';
import { users } from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'allusers',
  templateUrl: './allusers.component.html'
})
export class allusers implements OnInit {

  constructor(private user: users, private flashMessage: FlashMessagesService) { }
  private allusers = []
  private usertype = []
  private newUsers = []
  private users = []
  private admins = []
  private new_u: Boolean = true;
  private admin: Boolean = false;
  private user_f: Boolean = false;

  ngOnInit() {
    this.user.getAllusers().subscribe(res => {
      if (res) {
        this.allusers = res
        for (var i = 0; i < this.allusers.length; i++) {
          if (this.allusers[i].type == "user") {
            this.users.push(this.allusers[i]);
          } else {
            if (this.allusers[i].type == "none") {
              this.newUsers.push(this.allusers[i])
            } else {
              this.admins.push(this.allusers[i])
            }
          }
        }
        this.allusers = this.newUsers;
        console.log(this.allusers)
        return true
      }
      else {
        return false;
      }
    })
  }

  Onacceptuser(useremail, index) {
    if (this.usertype.length == 0) {
      this.flashMessage.show('Please select a type', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else {
      const accepteduser = {
        email: useremail,
        active: 1,
        type: this.usertype[index]
      }
      this.user.acceptuser(accepteduser).subscribe(res => {
        this.flashMessage.show('User successfully confirmed', { cssClass: 'alert-success', timeout: 3000 })
        location.reload();
      });

    }
  }

  delete(email) {
    this.user.banuser(email).subscribe(res => {
      console.log(res);
      this.flashMessage.show('User successfully banned', { cssClass: 'alert-warning', timeout: 3000 })
      // location.reload();
    });
  }

  newUser() {
    this.new_u = true;
    this.admin = false;
    this.user_f = false;
    this.allusers = this.newUsers;
  }

  showAdmins() {
    this.new_u = false;
    this.admin = true;
    this.user_f = false;
    this.allusers = this.admins;
  }

  showUsers() {
    this.new_u = false;
    this.admin = false;
    this.user_f = true;
    this.allusers = this.users;
  }

}
