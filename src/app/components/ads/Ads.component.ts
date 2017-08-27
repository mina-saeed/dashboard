import { Component, OnInit, ViewChild } from '@angular/core'
import { AdsService } from '../../shared/ads.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { adsDialog } from './adsDialog.component';

@Component({
    templateUrl: 'Ads.component.html',
    providers: [AdsService]
})

export class Ads implements OnInit {
    private confimedAds = []
    private requestedAds = []
    p: number = 1;
    private request:Boolean = true;
    private confirm:Boolean = false;
    constructor(private dialogService: DialogService, private ads: AdsService, private router: Router, private flashMessage: FlashMessagesService) { }
    ngOnInit() {
        this.ads.getconfirmedAds().subscribe(res => {
            this.confimedAds = res
        })
        this.ads.getunconfirmedAds().subscribe(res =>{
            console.log(res)
            this.requestedAds = res
        })
    }

    show(ads) {
        this.dialogService.addDialog(adsDialog, {
            name_en: ads.name, description_en: ads.description, start: ads.start,
            end: ads.end, link: ads.link,image: ads.adsImage
        });

    }
    requested(){
        this.request = true;
        this.confirm = false;

    }

    confirmed(){
        this.request = false;
        this.confirm = true;
    }

    conf(id,index){
        this.ads.confirmAds(id).subscribe(res=> {
            if(res){
                window.scroll(0,0)
				this.flashMessage.show('Ads Confirmed successfully', { cssClass: 'alert-success', timeout: 3000 })
						this.requestedAds.splice(index, 1)
						return this.requestedAds;
            }
        })
    }
}