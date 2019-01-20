import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { PrimengModule } from "../primeng/primeng.module";

@NgModule({
	imports: 
	[
		CommonModule,
		PrimengModule
	],
	declarations: [SkillsComponent],
	exports:
	[
		SkillsComponent
	]
})
export class SkillsModule { }
