import { Component, OnInit } from '@angular/core';
import { AssociateSkillServices } from './Associate-Skill.Service';
import { IAssociateSkill } from './AssociateSkill';

@Component({
    selector:'app-skill',
    templateUrl:'./Associate-Skill.component.html',
    providers:[AssociateSkillServices]
})

export class AssociateSkillComponent implements OnInit{


    constructor(private associateskillservice: AssociateSkillServices){

    }

    pageTitle: string = 'Associate Skill';
    
    private _name: string ='';
    get Name(): string {
        return this._name;
    }
    set Name(value: string){
        this._name = value;
        this.filterAssociateSkills = this.performfilter(value);
    }

    private _associateId: string ='';
    get AssociateID(): string {
        return this._associateId;
    }
    set AssociateID(value: string){
        this._associateId = value;
    }

    private _skillId: string ='';
    get SkillID(): string {
        return this._skillId;
    }
    set SkillID(value: string){
        this._skillId = value;
    
    }

    private _monilenumner: string ='';
    get MobileNumber(): string {
        return this._monilenumner;
    }
    set MobileNumber(value: string){
        this._monilenumner = value;
    }

    private _email: string ='';
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
        this.Name = '';
        this.AssociateID = '';
        this.SkillID = '1';
        this.AssociateSkills = this.associateskillservice.getAssociateSkills();
        this.filterAssociateSkills = this.AssociateSkills;
        
    }

    performfilter(name: string): IAssociateSkill[] {
        name = name.toLocaleLowerCase();
        return this.AssociateSkills.filter((associate: IAssociateSkill) => associate.Name.toLocaleLowerCase().includes(name));
    }
    
}



