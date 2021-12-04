import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AssociateSkillServices } from "./Associate-Skill.Service";
import { IAssociateSkill } from "./AssociateSkill";

@Component({
    templateUrl:'./Associate-Update.component.html',
    providers:[AssociateSkillServices]
})
export class AssociateUpdateComponent implements OnInit, OnDestroy{
    pagetile:string = "Associate Skill Update";
    updateStatus:string="";


    constructor(private associateskillservice: AssociateSkillServices, private route: ActivatedRoute) {

    }

    pageTitle: string = 'Associate Skill';
    errorMessage:string='';
    private _name: string ='';
    private _id: string ='';
    private _associateId: string ='';
    private _skillId: string ='';
    private _monilenumner: string ='';
    private _email: string ='';
    sub!:Subscription;

    get Id(): string {
        return this._id;
    }
    set Id(value: string){
        this._id = value;
    }

    get Name(): string {
        return this._name;
    }
    set Name(value: string){
        this._name = value;
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

    ngOnInit():void{
        this.Id = this.route.snapshot.paramMap.get('id');
        this.GetSearchResultBySkill(this.Id );
        console.log('on init');
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }


    associateAddSkill:IAssociateSkill; 

    
    GetSearchResultBySkill(pid:string)
    {
        this.sub = this.associateskillservice.getAssociateSkillByID('primary/'+pid).subscribe({
            next: associdateskills => {
                this.Name = associdateskills.name,
                this.Id = pid,
                this.SkillID = associdateskills.skillID,
                this.AssociateID = associdateskills.associateID,
                this.MobileNumber = associdateskills.mobileNumber,
                this.email = associdateskills.email
            },
            error: err => this.errorMessage = err
        });
    }

    // 

    UpdateDetails()
{
    this.associateAddSkill = 
                {
                    id: this.Id,
                    name:this.Name, 
                    associateID:this.AssociateID, 
                    skillID:this.SkillID, 
                    mobileNumber: this.MobileNumber, 
                    email:this.email
                    
                }
                


    this.associateskillservice.UpdateSkillDetails(this.associateAddSkill).subscribe({
        next:result => { this.updateStatus = "Update success."},
        error: err => this.errorMessage = err
    })}

}