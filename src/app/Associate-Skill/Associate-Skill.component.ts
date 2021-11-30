import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssociateSkillServices } from './Associate-Skill.Service';
import { IAssociateSkill } from './AssociateSkill';

@Component({
    selector:'app-skill',
    templateUrl:'./Associate-Skill.component.html',
    providers:[AssociateSkillServices]
})

export class AssociateSkillComponent implements OnInit, OnDestroy {


    constructor(private associateskillservice: AssociateSkillServices){

    }

    pageTitle: string = 'Associate Skill';
    errorMessage:string='';
    private _name: string ='';
    private _associateId: string ='';
    private _skillId: string ='';
    private _monilenumner: string ='';
    private _email: string ='';
    sub!:Subscription;


    get Name(): string {
        return this._name;
    }
    set Name(value: string){
        this._name = value;
        this.filterAssociateSkills = this.performfilter(value);
    }

    
    get AssociateID(): string {
        return this._associateId;
    }
    set AssociateID(value: string){
        this._associateId = value;
    }

    
    get SkillID(): string {
        return this._skillId;
    }
    set SkillID(value: string){
        this._skillId = value;
    
    }

   
    get MobileNumber(): string {
        return this._monilenumner;
    }
    set MobileNumber(value: string){
        this._monilenumner = value;
    }

   
    get email(): string {
        return this._email;
    }
    set email(value: string){
        this._email = value;
    }

    filterAssociateSkills: IAssociateSkill[] =[];

    AssociateSkills:IAssociateSkill[] = []; 

    ngOnInit():void{
        console.log('on init');
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    performfilter(name: string): IAssociateSkill[] {
        // name = name.toLocaleLowerCase();
        // return this.AssociateSkills.filter((associate: IAssociateSkill) => associate.name.toLocaleLowerCase().includes(name));
        return this.AssociateSkills;
    }

    GetSearchResult(){
        this.sub = this.associateskillservice.getAssociateSkills('all').subscribe({
            next: associdateskills => {
                this.AssociateSkills = associdateskills;
                this.filterAssociateSkills = this.AssociateSkills;
            },
            error: err => this.errorMessage = err
        });
    }
    

    GetSearchResultByName(){
        this.sub = this.associateskillservice.getAssociateSkills('name/'+this.Name).subscribe({
            next: associdateskills => {
                this.AssociateSkills = associdateskills;
                this.filterAssociateSkills = this.AssociateSkills;
            },
            error: err => this.errorMessage = err
        });
}

GetSearchResultByAID(){
    this.sub = this.associateskillservice.getAssociateSkills('Id/'+this.AssociateID).subscribe({
        next: associdateskills => {
            this.AssociateSkills = associdateskills;
            this.filterAssociateSkills = this.AssociateSkills;
        },
        error: err => this.errorMessage = err
    });
}


}