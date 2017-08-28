import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { PromoService } from '../../shared/promo.service'
@Component({

    templateUrl: 'updatepromo.component.html',
    providers: [PromoService]
})

export class updatepromo implements OnInit{
    start: string
    end: string
    old: any
    constructor(private PromoService: PromoService, private router: Router, private flash: FlashMessagesService) { }
    ngOnInit(){
        this.old = JSON.parse(this.PromoService.retreive());
        this.start = this.old.start;
        this.end = this.old.end
    }
    
    updatePromo(promo) {
        if (this.end > this.start) {
            var p: pro = promo;
            p.id = this.old._id
            p.newStart = this.start
            p.newEnd = this.end
            this.PromoService.updatePromo(p).subscribe(res => {
                if (res) {
                    console.log(res)
                    this.PromoService.clear()
                    this.router.navigate(['/promos'])
                    this.flash.show('Promo Updated Successfully', { cssClass: 'alert-success', timeout: 3000 })
                }
            })
        } else {
            window.scroll(0, 0)
            this.flash.show('End Date must be greater than Start Date', { cssClass: 'alert-danger', timeout: 3000 })
        }
    }
}

interface pro {
    id: string,
    newStart: string,
    newEnd: string,
}

