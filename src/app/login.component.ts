import {Component , OnInit} from '@angular/core'
import {users} from './shared/users.service'

@Component({
	selector: 'app-login',

	templateUrl:'./login.component.html',
	providers:[users]
})

export class login implements OnInit{
	admin :any= []
	constructor(private user: users){}

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
} 