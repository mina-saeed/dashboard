import { Component, OnInit } from '@angular/core';
import { pharmacy} from '../../shared/pharmacy.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-allpharmacy',
  templateUrl: './allpharmacy.component.html',
  styleUrls: ['./allpharmacy.component.css']
})
export class AllpharmacyComponent implements OnInit {

 constructor(private pharmacy: pharmacy,private flashMessage: FlashMessagesService) { }
		private allpharma =[] 
    private pharmacategory =[]

		ngOnInit(){
			 this.pharmacy.getAllpharma().subscribe(res=>{
         if(res){
			 	this.allpharma = res
			 	return this.allpharma
         }
         else{
           return false;
         }
			 })
		}

    Onacceptpharma(pharmaemail,index){
      if(this.pharmacategory.length ==0){
        this.flashMessage.show('Please select a type', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
    }
      else{
      const acceptedpharma = {
        email: pharmaemail,
        active: '1',
        category: this.pharmacategory[index]
      }
      this.pharmacy.acceptpharma(acceptedpharma).subscribe(res=>{
        if(res){
		    this.flashMessage.show('Product Subcategory added Successfully', { cssClass: 'alert-success', timeout: 3000 })
          location.reload();
        }
      })
    }
  }


}
