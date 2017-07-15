import { Component, OnInit } from '@angular/core'

@Component({

    templateUrl: 'locations.component.html',


})
export class locations {
    private regions = [];
    private locations = [];
    private initial: String = '';
    private type: Boolean = false;
    constructor() { }

    ngOnInit() {
        this.regions = ["Cairo","Alexandria"];
    }

    OnchangeRe(region) {
        console.log(region)
        switch (region) {
            case "Cairo": this.locations = ["Zamalik", "Rehab", "Nasr City"]; break;
            case "Alexandria": this.locations = ["Mamora", "Montaza"]; break;
        }
        this.type = true;
    }

    OnchangeAR(area){
        console.log(area)
    }
}