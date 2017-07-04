import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {users} from '../shared/users.service';

@Injectable()
export class deactivateGuard implements CanActivate{
  constructor(private users:users, private router:Router){

  }

  canActivate(){
    if(this.users.loggedIn()){
    this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
