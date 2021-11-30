import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AssociateSkillComponent } from './Associate-Skill/Associate-Skill.component';

@NgModule({
  declarations: [
    AppComponent, AssociateSkillComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AssociateSkillComponent]
})
export class AppModule { }
