import { Component, OnInit } from '@angular/core';
import { pharmacy } from '../../shared/pharmacy.service'
import { users } from '../../shared/users.service'

@Component({
  selector: 'line-chart-demo',
  templateUrl: './chart.component.html',
  providers: [pharmacy, users]
})
export class LineChartDemoComponent implements OnInit {
  private pharmacies = [];
  private pharmas = [];
  private history: any
  constructor(private pharmacy: pharmacy, private users: users) { }
  // lineChart
  ngOnInit() {
    this.pharmacy.getAllpharma().subscribe(res => {
      if (res) {
        console.log(res)
        this.pharmacies = res
        for (var i = 0; i < this.pharmacies.length; i++) {
          if (this.pharmacies[i].category != null && this.pharmacies[i].active == 1) {
            this.pharmas.push(this.pharmacies[i])
          }
        }
        this.history = {
          orders: 0,
          cost: 0
        }        
      }
      else {
        return false;
      }
    })
  }


  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  Onchange(name) {
    var email;
    for (var i = 0; i < this.pharmacies.length; i++) {
      if (this.pharmacies[i].name == name) {
        email = this.pharmacies[i].email;
        break;
      }
    }
    this.users.pharmacyHistory(email).subscribe(res => {
      console.log(res)
      return this.history = res; // card commented in html 
    })
  }
}