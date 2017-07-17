import { Component, OnInit } from '@angular/core'
var settings = JSON.parse(JSON.stringify(require('../../settings.json')));

@Component({

    templateUrl: 'locations.component.html',


})
export class locations {
    private regions = [];
    private locations = [];
    private initial: String = '';
    private type: Boolean = false;
    private table: Boolean = false;
    constructor() { }

    ngOnInit() {
        console.log(settings.public.cities)
        this.regions = settings.public.cities;
    }

    OnchangeRe(region) {
        console.log(region)
        switch (region) {
            case "Cairo": this.locations = settings.public.cairoList;break;
            case "Giza": this.locations = settings.public.gizaList;break;
            case "Alexandria": this.locations = settings.public.alexandriaList;break;
            case "Suez": this.locations = settings.public.suezList;break;
            case "Ismailia": this.locations = settings.public.ismailiaList;break;
            case "Port Said": this.locations = settings.public.portsaidList;break;
            case "Damietta": this.locations = settings.public.damiettaList;break;
            case "Sharqia": this.locations = settings.public.sharqiaList;break;
            case "Qaliubiya": this.locations = settings.public.qaliubiyaList;break;
            case "El-Beheira": this.locations = settings.public.ElBeheiraList;break;
            case "Kafr El-Shaeikh": this.locations = settings.public.KafrElShaeikhList;break;
            case "Gharbia": this.locations = settings.public.GharbiaList;break;
            case "Monofia": this.locations = settings.public.MonofiaList;break;
            case "Qena": this.locations = settings.public.QenaList;break;
            case "Menia": this.locations = settings.public.MeniaList;break;
            case "Fayoum": this.locations = settings.public.FayoumList;break;
            case "Beni Swaif": this.locations = settings.public.BeniSwaifList;break;
            case "Sohag": this.locations = settings.public.SohagList;break;
            case "Assiut": this.locations = settings.public.AssiutList;break;
            case "Marsa Matrouh": this.locations = settings.public.MarsaMatrouhList;break;
            case "New Valley": this.locations = settings.public.NewValleyList;break;
            case "Red Sea": this.locations = settings.public.RedSeaList;break;
            case "Luxor": this.locations = settings.public.LuxorList;break;
            case "Aswan": this.locations = settings.public.AswanList;break;
            case "North Sinai": this.locations = settings.public.NorthSinaiList;break;
            case "South Sinai": this.locations = settings.public.SouthSinaiList;break;

        }
        this.type = true;
    }

    OnchangeAR(area){
        console.log(area)
        this.table = true;
    }
}