import { Component, OnInit } from '@angular/core';
import { pharmacy } from '../../shared/pharmacy.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-allpharmacy',
  templateUrl: './allpharmacy.component.html',
  styleUrls: ['./allpharmacy.component.css']
})
export class AllpharmacyComponent implements OnInit {

  constructor(private pharmacy: pharmacy, private flashMessage: FlashMessagesService) { }
  private allpharma = []
  private pharmacategory = []
  private newpharma = []
  private pharmas = []
  private bannedpharmas = []
  private new_phar: Boolean = true;
  private pharm: Boolean = false;
  private banned: Boolean = false;
  ngOnInit() {
 
    this.pharmacy.getAllpharma().subscribe(res => {
      if (res) {
        this.allpharma = res
        for (var i = 0; i < this.allpharma.length; i++) {       
            if (this.allpharma[i].category == null && this.allpharma[i].active ==null) {
              this.newpharma.push(this.allpharma[i])
            } else if(this.allpharma[i].active == 0) {
              this.bannedpharmas.push(this.allpharma[i])
            }
            else{
              this.pharmas.push(this.allpharma[i]);
            }
        }
        this.allpharma = this.newpharma;
        console.log(this.newpharma)
        console.log(this.bannedpharmas)
        console.log(this.pharmas)
        
        return true
      }
      else {
        return false;
      }
    })
  }

  Onacceptpharma(pharmaemail, index,category) {
    console.log(category)
    if (this.pharmacategory.length == 0 && category == null) {
      window.scroll(0, 0)
      this.flashMessage.show('Please select a type', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else if(category == null){
      const acceptedpharma = {
        email: pharmaemail,
        active: 1,
        category: this.pharmacategory[index]
      }
      this.pharmacy.acceptpharma(acceptedpharma).subscribe(res => {
        if (res) {
          this.flashMessage.show('Pharmacy is accepted Successfully', { cssClass: 'alert-success', timeout: 3000 })
          location.reload();
        }
      })
    }else{
      const acceptedpharma = {
        email: pharmaemail,
        active: 1,
        category: category
      }
      this.pharmacy.acceptpharma(acceptedpharma).subscribe(res => {
        if (res) {
          this.flashMessage.show('Pharmacy is accepted Successfully', { cssClass: 'alert-success', timeout: 3000 })
          location.reload();
        }
      })
    }
  }

  delete(email) {
    this.pharmacy.banpharma(email).subscribe(res => {
      window.scroll(0, 0)
      this.flashMessage.show('Pharmacy successfully banned', { cssClass: 'alert-warning', timeout: 3000 })
    });
  }

  newPharma() {
    this.new_phar = true;
    this.pharm = false;
    this.banned = false;
    this.allpharma = this.newpharma;
  }

  showBanned() {
    this.new_phar = false;
    this.banned = true;
    this.pharm = false;
    this.allpharma = this.bannedpharmas;
  }

  showPharma() {
    this.new_phar = false;
    this.banned = false;
    this.pharm = true;
    this.allpharma = this.pharmas;
  }





}
