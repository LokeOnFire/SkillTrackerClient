import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IAssociateSkill } from "./AssociateSkill";
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class AssociateSkillServices{
    //private associateskillSearchURL = 'https://ey6d7tesol.execute-api.us-east-1.amazonaws.com/dev/';
    private associateskillSearchURL = 'http://ec2-44-195-61-90.compute-1.amazonaws.com:8000/SkillSearch/api/v1/admin/';
    private associateskillAddURL = 'http://ec2-44-195-61-90.compute-1.amazonaws.com:8001/SkillAdd/api/vi/engineer/add-profile';
    private associateskillUpdateURL = 'http://ec2-44-195-61-90.compute-1.amazonaws.com:8002/SkillUpdate/api/vi/engineer/update-profile';

    constructor(private http: HttpClient){}

    getAssociateSkills(input:string): Observable<IAssociateSkill[]>{
        console.log(input);
        return this.http.get<IAssociateSkill[]>(this.associateskillSearchURL + input).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
        
    }

    getAssociateSkillByID(input:string): Observable<IAssociateSkill>{
        console.log(input);
        return this.http.get<IAssociateSkill>(this.associateskillSearchURL + input).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
        
    }

    AddSkillDetails(input:IAssociateSkill): Observable<any>{
        console.log(JSON.stringify(input));

        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
        });
        
        return this.http.post<any>(this.associateskillAddURL,input,{ headers: httpHeaders }).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
        
    }

    UpdateSkillDetails(input:IAssociateSkill): Observable<any>{
        console.log(JSON.stringify(input));

        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
        });
        
        return this.http.put<any>(this.associateskillUpdateURL,input,{ headers: httpHeaders }).pipe(
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