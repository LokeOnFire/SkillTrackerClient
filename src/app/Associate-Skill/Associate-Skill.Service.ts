import { Injectable } from "@angular/core";
import { IAssociateSkill } from "./AssociateSkill";

@Injectable({
    providedIn:'root'
})
export class AssociateSkillServices{

    getAssociateSkills(): IAssociateSkill[]{

        return [
            {
                "Name":"Lokesh1",
                "AssociateID":"209656",
                "SkillID":"1",
                "MobileNumber":"9606035543",
                "email":"lokesh@gmail.com"
                },
                {
                   "Name":"Lokesh",
                   "AssociateID":"209656",
                   "SkillID":"1",
                   "MobileNumber":"9606035543",
                   "email":"lokesh@gmail.com"
                   },
                   {
                       "Name":"Lokesh",
                       "AssociateID":"209656",
                       "SkillID":"1",
                       "MobileNumber":"9606035543",
                       "email":"lokesh@gmail.com"
                       }

        ];
        
    }
}