import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
      imports: [
            CommonModule
      ],
      declarations: 
      [
            ContactComponent, 
            SocialsComponent
      ],
      exports:
      [
            ContactComponent,            
      ]
})
export class ContactModule { }
