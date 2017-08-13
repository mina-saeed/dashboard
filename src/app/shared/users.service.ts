import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

import 'rxjs/add/operator/map'
@Injectable()
export class users {
	private user: any;
	constructor(private http: Http, private router: Router) {

	}
	getUser(user_email, user_password, request_token): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		let body = {
			email: user_email,
			password: user_password,
			token: request_token,
		};
		this.http.post(config.userIP + '/login', JSON.stringify(body), new RequestOptions({ headers: headers }))
			.map(res => res.json()).subscribe(data => {
				if (data) {
					localStorage.setItem('user', JSON.stringify(data));
					this.user = data;
					return this.router.navigate(['/home'], data[0])
				} else {
					return false
				}

			});

	}
	register(user_name, user_email, user_password, request_token): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		let body = {
			name: user_name,
			email: user_email,
			password: user_password,
			token: request_token,
		};
		this.http.post(config.userIP + '/register', JSON.stringify(body), new RequestOptions({ headers: headers }))
			.map(res => { return res.status })

	}
	logout(): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		this.http.get(config.userIP + '/logout', new RequestOptions({ headers: headers })).map(res => res.json).subscribe(data => { if (data) { return this.router.navigate(['']) } })
		localStorage.clear();
		this.user = null;

	}

	loggedIn(): any {
		return localStorage.getItem('user') != null;
	}

	getAllusers(): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.userIP + '/allUsers', new RequestOptions({ headers: headers })).map(res => res.json());

	}

	acceptuser(accepteduser): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.post(config.userIP + '/admin/confirmAdmin', JSON.stringify(accepteduser), new RequestOptions({ headers: headers }))
			.map(res => { return res })
	}

	banuser(email): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.post(config.userIP + '/banUser', JSON.stringify({ email: email }), new RequestOptions({ headers: headers }))
			.map(res => { return res })
	}
}