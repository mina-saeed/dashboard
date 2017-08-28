import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { PromoService } from '../../shared/promo.service'

@Component({
	templateUrl: 'promos.component.html',
	providers: [PromoService]
})

export class promos implements OnInit {
	private promos = []
	constructor(private PromoService: PromoService,private router: Router, private flashMessage: FlashMessagesService) { }

	ngOnInit() {
		this.PromoService.getpromos().subscribe(res => {
			this.promos = res
			return this.promos
		})
	}

	delete(id, index) {
		this.PromoService.deletePromo(id).subscribe(res => {
			if (res == 200) {
				window.scroll(0, 0)
				this.flashMessage.show('Promo deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				this.promos.splice(index, 1)
				return this.promos;

			}
		});
	}

	update(promo) {
		this.PromoService.store(promo)
		this.router.navigate(['/updatepromo']);
	}




}