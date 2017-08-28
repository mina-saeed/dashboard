import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'addpromo.component.html',
	providers: []
})

export class addpromo {
	code: string
	start: string
	end: string
    percentage: number 
	constructor(private router: Router, private flash: FlashMessagesService) { }
	addAds() {


		if(this.end>this.start){
			const formData = new FormData();
			formData.append('code', this.code)
            formData.append('start', this.start)
			formData.append('end', this.end)
			formData.append('percentage', this.percentage+'')
			/*this.AdsService.addAds(formData).subscribe(res => {
				if (res) {
					this.flash.show('Promo added Successfully', { cssClass: 'alert-success', timeout: 3000 })
				}
			})
		}else{
			window.scroll(0, 0)
			this.flash.show('End Date must be greater than Start Date', { cssClass: 'alert-danger', timeout: 3000 })			
		}*/
    }

    }
}