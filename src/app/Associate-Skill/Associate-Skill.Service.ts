import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IAssociateSkill } from "./AssociateSkill";
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class AssociateSkillServices{
    private associateskillURL = 'http://localhost:8000/SkillSearch/api/v1/admin/';

    constructor(private http: HttpClient){}

    getAssociateSkills(input:string): Observable<IAssociateSkill[]>{
        console.log(input);
        return this.http.get<IAssociateSkill[]>(this.associateskillURL + input).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
        
    }

    private handleError(err: HttpErrorResponse)
    {
        let errorMessage ='';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}