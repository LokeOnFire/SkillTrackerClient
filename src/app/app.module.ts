import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AssociateSkillComponent } from './Associate-Skill/Associate-Skill.component';
import { AssociateUpdateComponent } from './Associate-Skill/Associate-Update.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, AssociateSkillComponent,
    AssociateUpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, 
    RouterModule.forRoot([
      { path:'home', component:AssociateSkillComponent },
      { path:'update/:id', component:AssociateUpdateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
