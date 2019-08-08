import { DataService } from './../shared/dataService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewIssuesComponent } from './components/view-issues/view-issues.component';
import { AddIssuesComponent } from './components/add-issues/add-issues.component';
import { MatTableModule, MatIconModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ViewIssuesComponent, AddIssuesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers:[DataService]
})
export class IssueTrackerModule { }
