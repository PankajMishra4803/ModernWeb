import { IssuesServiceService } from './../../../shared/issues-service.service';
import { IssueTracker } from './../../../shared/model/IssueTracker.model';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/dataService.service';

@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent implements OnInit, AfterViewInit  {
  issueTracker: any =[];
  public displayedColumns = ['description', 'severity', 'status', 'createDate','resolvedDate', 'update', 'delete'];
  public dataSource = new MatTableDataSource<IssueTracker>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router,private issuesServiceService: IssuesServiceService, private dateService: DataService) { }

ngOnInit() {
    this.getIssues();
}
getIssues(){
      this.issuesServiceService.getIssues().subscribe((res)=>{
      this.issueTracker =res;
      this.dataSource.data = this.issueTracker
})}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}
redirectToUpdate(element) {
  this.dateService.changeMessage(element)
 this.router.navigateByUrl('/update/' + element.id)
}
redirectToDelete(id) {
  this.issuesServiceService.deleteIssue(id).subscribe(() =>{
    this.ngOnInit();
})}
addIssue() {
  this.router.navigateByUrl('/addisuue')
}
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
}
}
