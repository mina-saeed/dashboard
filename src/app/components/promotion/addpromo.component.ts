import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { PromoService } from '../../shared/promo.service'
@Component({

	templateUrl: 'addpromo.component.html',
	providers: [PromoService]
})

export class addpromo {
	start: string
	end: string
	percentage: number
	constructor(private PromoService: PromoService, private router: Router, private flash: FlashMessagesService) { }
	addPromo(promo) {
		if (this.end > this.start) {
			if (!(this.percentage > 100 || this.percentage < 1)) {
				var p:pro = promo;
				p.admin = JSON.parse(localStorage.getItem('user')).email;
				p.percentage = promo.percentage +'%'
				this.PromoService.addPromo(p).subscribe(res => {
					if (res) {
						this.flash.show('Promo added Successfully', { cssClass: 'alert-success', timeout: 3000 })
					}
				})
			} else {
				window.scroll(0, 0)
				this.flash.show('Percentage must be between 1 and 100', { cssClass: 'alert-danger', timeout: 3000 })
			}
		} else {
			window.scroll(0, 0)
			this.flash.show('End Date must be greater than Start Date', { cssClass: 'alert-danger', timeout: 3000 })
		}
	}
}

interface pro {
	code:string,
	start: string,
	end: string,
	percentage: string,
	admin: string
}

