import { DataService } from 'src/app/shared/dataService.service';
import { IssuesServiceService } from './../../../shared/issues-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { IssueTracker } from 'src/app/shared/model/IssueTracker.model';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-add-issues',
  templateUrl: './add-issues.component.html',
  styleUrls: ['./add-issues.component.css']
})
export class AddIssuesComponent implements OnInit {
  title = 'Angular Form Validation Tutorial';
  model: IssueTracker = new IssueTracker();
  severities : string[] = ['Minor', 'Major', 'Critical'];
  status : string[] = ['Open', 'In Progress', 'Closed'];
  @ViewChild('f', {static: true}) form: any;
  constructor(private router: Router, private fb: FormBuilder, private issuesServiceService:IssuesServiceService, private dataService: DataService) { }
  ngOnInit() {
    //this.dataService.currentMessage.subscribe(message => this.model = message)
    //console.log(this.model)

      }
  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.form.value.createDate = this.formatDate(this.form.value.createDate);
      this.form.value.resolvedDate = this.formatDate(this.form.value.resolvedDate);
      this.issuesServiceService.addIssue(this.form.value).subscribe((res)=>{
        if(res){
          console.log("Form Submitted!");
          this.router.navigateByUrl('/');
        }
      });  
      this.form.reset();
    }
  }
 formatDate(value)
  {
     return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getYear();
  }
  backViewIssue(){
    this.router.navigateByUrl('/');
  }
}
