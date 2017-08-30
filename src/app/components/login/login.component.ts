import { Component, OnInit } from '@angular/core'
import { users } from '../../shared/users.service'
import { ValidateService } from '../../shared/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
@Component({
	selector: 'app-login',

	templateUrl: './login.component.html',
	providers: [users, ValidateService,Md5]
})

export class login implements OnInit {
	admin: any = []
	constructor(   private _md5: Md5,private user: users, private router: Router, private validator: ValidateService, private flash: FlashMessagesService) { }

	ngOnInit() {

	}
	onLogin(userData) {
		console.log('login')
		//17-06-27 03:07
		let date = new Date()

		let h = date.getHours()
		let m = date.getMinutes()
		var minutes: string = ''
		var hours: string = ''
		if (m < 10) {
			minutes = '0' + '' + m + ''
		} else {
			minutes = '' + m + ''
		}

		if (h < 10) {
			hours = '0' + '' + h + ''
		} else {
			hours = '' + h + ''
		}
		let date_format = hours + ':' + minutes
		let token = btoa(date_format + date_format)


		this.admin = this.user.getUser(userData.email, userData.password, token)


	}
	onRegister(userData) {
		//17-06-27 03:07
		let date = new Date()

		let h = date.getHours()
		let m = date.getMinutes()
		var minutes: string = ''
		var hours: string = ''
		if (m < 10) {
			minutes = '0' + '' + m + ''
		} else {
			minutes = '' + m + ''
		}

		if (h < 10) {
			hours = '0' + '' + h + ''
		} else {
			hours = '' + h + ''
		}
		let date_format = hours + ':' + minutes
		let token = btoa(date_format + date_format)


		this.admin = this.user.register(userData.reg_name, userData.reg_email, userData.password, token).subscribe(res => {
			if (res) {
				this.flash.show('You have been registered Successfully, Wait until be verified', { cssClass: 'alert-success', timeout: 3000 });
				return this.router.navigate(['/login'])
			} else {
				return false
			}

		});
	}
	onForget(userData) {
		var hashingToken=Md5.hashStr(userData.email.toString());
		const body =
		{
		  type:"admin",
		  email:userData.email,
		  token: hashingToken
	  
		}
		this.admin = this.user.forget(userData.email).subscribe(res => {
			if (res == 200) {
				this.flash.show("Please Check your mail",{ cssClass: 'alert-success', timeout: 3000 })
			} else {
				this.flash.show('Email does not exist', { cssClass: 'alert-danger', timeout: 3000 });
			}

		});

	}
} 