import { IssueTrackerModule } from './issue-tracker/issue-tracker.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';     
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    IssueTrackerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
