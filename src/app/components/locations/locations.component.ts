import { Component, OnInit } from '@angular/core'
import { pharmacy } from '../../shared/pharmacy.service'
import { FlashMessagesService } from 'angular2-flash-messages';
var settings = JSON.parse(JSON.stringify(require('../../settings.json')));

@Component({

    templateUrl: 'locations.component.html',
    providers: [pharmacy]

})
export class locations {
    private pharmacies = [];
    private regions = [];
    private locations = [];
    private deliverTo = [];
    private pharmapriority = [];
    private initial: String = '';
    private type: Boolean = false;
    private table: Boolean = false;
    private area: string;
    constructor(private pharmacy: pharmacy, private flashMessage: FlashMessagesService) { }

    ngOnInit() {
        this.regions = settings.public.cities;
    }

    OnchangeRe(region) {
        switch (region) {
            case "Cairo": this.locations = settings.public.cairoList; break;
            case "Giza": this.locations = settings.public.gizaList; break;
            case "Alexandria": this.locations = settings.public.alexandriaList; break;
            case "Suez": this.locations = settings.public.suezList; break;
            case "Ismailia": this.locations = settings.public.ismailiaList; break;
            case "Port Said": this.locations = settings.public.portsaidList; break;
            case "Damietta": this.locations = settings.public.damiettaList; break;
            case "Sharqia": this.locations = settings.public.sharqiaList; break;
            case "Qaliubiya": this.locations = settings.public.qaliubiyaList; break;
            case "El-Beheira": this.locations = settings.public.ElBeheiraList; break;
            case "Kafr El-Shaeikh": this.locations = settings.public.KafrElShaeikhList; break;
            case "Gharbia": this.locations = settings.public.GharbiaList; break;
            case "Monofia": this.locations = settings.public.MonofiaList; break;
            case "Qena": this.locations = settings.public.QenaList; break;
            case "Menia": this.locations = settings.public.MeniaList; break;
            case "Fayoum": this.locations = settings.public.FayoumList; break;
            case "Beni Swaif": this.locations = settings.public.BeniSwaifList; break;
            case "Sohag": this.locations = settings.public.SohagList; break;
            case "Assiut": this.locations = settings.public.AssiutList; break;
            case "Marsa Matrouh": this.locations = settings.public.MarsaMatrouhList; break;
            case "New Valley": this.locations = settings.public.NewValleyList; break;
            case "Red Sea": this.locations = settings.public.RedSeaList; break;
            case "Luxor": this.locations = settings.public.LuxorList; break;
            case "Aswan": this.locations = settings.public.AswanList; break;
            case "North Sinai": this.locations = settings.public.NorthSinaiList; break;
            case "South Sinai": this.locations = settings.public.SouthSinaiList; break;

        }
        this.type = true;
    }

    OnchangeAR(area) {
        this.area = area;
        this.pharmacy.getAllpharmaLocation(area).subscribe(res => {
            if (res!=[]) {
                this.table = true;                
                this.pharmacies = res
                for (var i = 0; i < this.pharmacies.length; i++) {
                    for (var j = 0; j < this.pharmacies[i].deliverTo.length; j++) {
                        if (this.pharmacies[i].deliverTo[j].name == area) {
                            this.pharmapriority[i] = this.pharmacies[i].deliverTo[j].priority+"";
                            break;
                        }
                    }
                }
                return this.pharmacies
            }
            else {
                this.table = false;                
                return false;
            }
        })

    }

    pharmacyPriority(pharmacyID, proirity, deliverTo) {
        if (JSON.parse(deliverTo).constructor === Array) {
            this.deliverTo = JSON.parse(deliverTo)
            for (var i = 0; i < this.deliverTo.length; i++) {
                if (this.area == this.deliverTo[i].name) {
                    this.deliverTo[i].priority = parseInt(this.pharmapriority[proirity])
                }

            }
            console.log(pharmacyID, this.deliverTo)
            this.pharmacy.pharmacyPriority(pharmacyID, this.deliverTo).subscribe(res => {
                if (res) {
                    this.flashMessage.show('Locations prioritized successfully', { cssClass: 'alert-success', timeout: 3000 })
                }
            })
        }
    }
}