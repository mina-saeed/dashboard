import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()
export class pharmacy {
	constructor(private http: Http, private router: Router) {

	}

	getAllpharma(): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.pharmacyIP + '/allPharmacies', new RequestOptions({ headers: headers })).map(res => res.json());

	}

	acceptpharma(acceptedpharma): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.post(config.pharmacyIP + '/admin/confirmPharmacy', JSON.stringify(acceptedpharma), new RequestOptions({ headers: headers }))
			.map(res => { return res })

	}

	banpharma(email): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.post(config.pharmacyIP + '/banPharmacy', JSON.stringify({ email: email }), new RequestOptions({ headers: headers }))
			.map(res => { return res })
	}
}