import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class AdsService {
	constructor(private http: Http) { }

	addAds(adv) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.post(config.adsIP + 'newAds', adv, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}

	getconfirmedAds(): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.adsIP + 'confirmedAds', new RequestOptions({ headers: headers })).map(res => res.json());

	}
	confirmAds(id): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.post(config.adsIP + 'confirmAdsRequest/', JSON.stringify({ id: id }), new RequestOptions({ headers: headers })).map(res => {
			return res.status
		});

	}
	getunconfirmedAds(): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.adsIP + 'adsRequests', new RequestOptions({ headers: headers })).map(res =>  res.json());

	}
}