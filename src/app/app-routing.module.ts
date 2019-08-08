import { AddIssuesComponent } from './issue-tracker/components/add-issues/add-issues.component';
import { ViewIssuesComponent } from './issue-tracker/components/view-issues/view-issues.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ViewIssuesComponent },
  { path: 'update/:id', component: AddIssuesComponent },
  { path: 'addisuue', component: AddIssuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
