import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import { Http ,Headers ,RequestOptions,Response } from '@angular/http'
import {api} from './api.service'

import 'rxjs/add/operator/map'
@Injectable()
export class users {
	private user: any;
	private url = 'http://207.154.240.16:3001'
	constructor(private http: Http , private router: Router,private api :api){

	}
	getUser(user_email , user_password ,request_token):any {

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')
    		let body = {
    			email:user_email,
			password:user_password,
			token: request_token,
		};
		 this.http.post(this.api.userUrl+ '/login', JSON.stringify(body), new RequestOptions({  headers: headers}))
    			.map(res => res.json()).subscribe(data => {
    				if(data){
					    localStorage.setItem('user', JSON.stringify(data));
    					this.user = data;
    					return this.router.navigate(['/home'],data[0])    				
    				}else{
    					return false
    				}

      		});
    	
      	}
    register(user_name , user_email , user_password ,request_token):any {

        let headers = new Headers();
            headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
            headers.append('Content-Type', 'application/json')
            let body = {
                name: user_name,
                email:user_email,
                password:user_password,
                token: request_token,
        };
         this.http.post(this.api.userUrl + '/register', JSON.stringify(body), new RequestOptions({  headers: headers}))
                .map(res => {return res.status}).subscribe(res => {
                    if(res){
                        
                        return this.router.navigate(['/login'])                    
                    }else{
                        return false
                    }

              });
        
          }          
	logout():any {

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		this.http.get(this.api.userUrl+'/logout', new RequestOptions({  headers: headers})).map(res=>res.json).subscribe(data=>{ if(data){ return this.router.navigate([''])}})
			localStorage.clear();
			this.user = null;
    	
      	}

	loggedIn():any {
        return localStorage.getItem('user') !=null;
    }

	getAllusers():any{
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
			headers.append('Content-Type', 'application/json')
    		return this.http.get(this.api.userUrl+'/allUsers', new RequestOptions({  headers: headers})).map(res=>res.json());

	}  

	acceptuser(accepteduser):any{
		let headers = new Headers();
            headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
            headers.append('Content-Type', 'application/json')
         return this.http.post(this.api.userUrl+ '/admin/confirmAdmin', JSON.stringify(accepteduser), new RequestOptions({  headers: headers}))
                .map(res => {return res})
	} 	
}