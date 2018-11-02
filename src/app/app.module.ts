import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ContactModule } from './contact/contact.module';
import { TimelineModule } from './timeline/timeline.module';
import { SkillsModule } from './skills/skills.module';
import { OtherActivitiesModule } from './other-activities/other-activities.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ContactModule,
    TimelineModule,
    SkillsModule,
    OtherActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
