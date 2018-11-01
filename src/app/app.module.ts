import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ContactModule } from './contact/contact.module';
import { EducationModule } from './education/education.module';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ContactModule,
    EducationModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
