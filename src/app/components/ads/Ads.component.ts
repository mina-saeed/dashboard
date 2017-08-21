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
    private allAds = []
    p: number = 1;
    constructor(private dialogService: DialogService, private ads: AdsService, private router: Router, private flashMessage: FlashMessagesService) { }
    ngOnInit() {
        this.ads.getconfirmedAds().subscribe(res => {
            this.allAds = res
            return this.allAds
        })
    }

    show(ads) {
        this.dialogService.addDialog(adsDialog, {
            name_en: ads.name, description_en: ads.description, start: ads.start,
            end: ads.end, link: ads.link,image: ads.adsImage
        });

    }
}