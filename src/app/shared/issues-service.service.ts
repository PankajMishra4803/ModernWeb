import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IssueTracker } from './model/IssueTracker.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
private url ="http://localhost:3000/isuues"
  constructor(private http: HttpClient) { }

  getIssues(){
    return this.http.get(this.url);``
  }
  addIssue(issue: IssueTracker){
    return this.http.post<IssueTracker>(this.url, issue);
  }
  deleteIssue(id){
    return this.http.delete(this.url + "/" + id);
  }
  
}
