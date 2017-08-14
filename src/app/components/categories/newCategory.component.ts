import {Component } from '@angular/core'
import {categoryService} from '../../shared/categories.service'
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl:'newCategory.component.html',
	providers:[categoryService]

})

export class newCategory {
private searchable: string = "true"
	constructor(private category : categoryService, private router:Router ,private flashMessage: FlashMessagesService){}

addNew(categoryFormData){
	this.category.addCategory(categoryFormData).subscribe(res=>{
		if(res){
		    this.flashMessage.show('Category added successfully', { cssClass: 'alert-success', timeout: 3000 })                     
			this.router.navigate(['/medicineCategory'])
		}
	})
}
}