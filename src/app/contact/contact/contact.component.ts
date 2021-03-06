import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	
	public birthdate: Date
	age: number
	constructor() { }

	ngOnInit() 
	{
		this.birthdate = new Date(1994,4,22)
		this.calculateAge()
	}

	calculateAge() 
	{
		var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
		this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
	}


}
