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
		return this.http.post(config.adsIP + 'newAds',adv, new RequestOptions({ headers: headers })).map(res => {
			return res.status
        })
    }
	}