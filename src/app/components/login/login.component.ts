import {Component , OnInit} from '@angular/core'
import {users} from '../../shared/users.service'
import {ValidateService} from '../../shared/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-login',

	templateUrl:'./login.component.html',
	providers:[users,ValidateService]
})

export class login implements OnInit{
	admin :any= []
	constructor(private user: users,private validator:ValidateService,private flash:FlashMessagesService){}

	ngOnInit(){
		
	}
	onLogin(userData){
		//17-06-27 03:07
		let date = new Date()

		let h = date.getHours()
		let m  = date.getMinutes()
		var minutes :string=''
		var hours :string='' 
		if(m<10){
			minutes = '0'+''+m+''
		}else{
			minutes = ''+m+''
		}

		if(h<10){
			hours = '0'+''+h+''
		}else{
			hours = ''+h+''
		}
		let date_format = hours+':'+minutes
		let token = btoa(date_format+date_format)


		this.admin = this.user.getUser(userData.email, userData.password , token)


	}
	onRegister(userData){
		if(this.validator.validaePassword(userData.reg_password)){
			if(userData.reg_password == userData.reg_password2){
		//17-06-27 03:07
		let date = new Date()

		let h = date.getHours()
		let m  = date.getMinutes()
		var minutes :string=''
		var hours :string='' 
		if(m<10){
			minutes = '0'+''+m+''
		}else{
			minutes = ''+m+''
		}

		if(h<10){
			hours = '0'+''+h+''
		}else{
			hours = ''+h+''
		}
		let date_format = hours+':'+minutes
		let token = btoa(date_format+date_format)


		this.admin = this.user.register(userData.reg_name, userData.reg_email, userData.reg_password , token)
		}
	else{
		this.flash.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
	}
		}else{
      this.flash.show('Password must be at least 6 characters contain at least 1 letter', { cssClass: 'alert-danger', timeout: 3000 });
		}

	}	
} 