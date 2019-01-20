import { Component, OnInit } from '@angular/core';
import { timelineData } from "../timeline.mock";

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

	timelineData: any[]
	pictures_path: string	

	constructor() { }

	ngOnInit() 
	{
		this.timelineData = timelineData
		this.pictures_path = 'assets/images/logos/200/'
	}
}
