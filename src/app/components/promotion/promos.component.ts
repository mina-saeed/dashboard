import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	templateUrl: 'promos.component.html',
	providers: []
})

export class promos implements OnInit {
	private promos = []
	constructor(private router: Router, private flashMessage: FlashMessagesService) { }

	ngOnInit() {

	}


}