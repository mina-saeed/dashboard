import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class PromoService {
    constructor(private http: Http) { }

    addPromo(promo) {
        let headers = new Headers();
        headers.append('Authorization', config.auth);
        headers.append('Content-Type', 'application/json')
        return this.http.post(config.promoIP + 'new', JSON.stringify(promo), new RequestOptions({ headers: headers })).map(res => {
            return res.status
        })
    }

    getpromos(): any {
        let headers = new Headers();
        headers.append('Authorization', config.auth);
        headers.append('Content-Type', 'application/json')
        return this.http.get(config.promoIP + 'all', new RequestOptions({ headers: headers })).map(res => res.json());

    }

    deletePromo(id) {
        let headers = new Headers();
        headers.append('Authorization', config.auth);
        headers.append('Content-Type', 'application/json')
        return this.http.delete(config.promoIP + 'deletePromotion/' + id, new RequestOptions({ headers: headers })).map(res => {
            return res.status
        })

    }

    updatePromo(promo) {
        let headers = new Headers();
        headers.append('Authorization', config.auth);
        headers.append('Content-Type', 'application/json')
        return this.http.put(config.promoIP + 'updatePromotion', JSON.stringify(promo), new RequestOptions({ headers: headers })).map(res => {
            return res.status
        })
    }

    store(promo) {
        localStorage.setItem('promo', JSON.stringify(promo));
    }

    retreive() {
        return localStorage.getItem('promo');
    }

    clear() {
        localStorage.removeItem('promo');
    }
}