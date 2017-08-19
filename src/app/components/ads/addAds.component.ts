import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AdsService } from '../../shared/ads.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'addAds.component.html',
	providers: [AdsService]
})

export class newAds {
	engname: string
	arbname: string
	engdesc: string
	start: string
	end: string
    link: string 
    active: string = '1'
	filesToUpload: Array<File> = [];

	constructor(private AdsService: AdsService, private router: Router, private flash: FlashMessagesService) { }

	fileChange(event) {
		this.filesToUpload = <Array<File>>event.target.files;
	}

	addAds() {

	if (this.filesToUpload.length > 0) {
			const files: Array<File> = this.filesToUpload;
			const formData = new FormData();
			formData.append("image", files[0], files[0]['name']);
			formData.append('name', this.engname)
            formData.append('description', this.engdesc)
            formData.append('start', this.start)
			formData.append('end', this.end)
			formData.append('link', this.link)
			formData.append('active', this.active)
			this.AdsService.addAds(formData).subscribe(res => {
				if (res) {
					this.flash.show('Ads added Successfully', { cssClass: 'alert-success', timeout: 3000 })
				}
			})
		}
		else {
			window.scroll(0, 0)
			this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
		}
    }
}