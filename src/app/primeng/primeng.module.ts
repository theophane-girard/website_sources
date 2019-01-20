import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
	imports: 
	[
		CommonModule,
		ProgressBarModule,
		ProgressSpinnerModule
	],
	exports:
	[
		ProgressBarModule,
		ProgressSpinnerModule
	],
	declarations: 
	[

	]
})
export class PrimengModule { }
