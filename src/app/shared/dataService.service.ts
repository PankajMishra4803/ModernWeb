import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IssueTracker } from './model/IssueTracker.model';

@Injectable()
export class DataService {
  element;
  private messageSource = new BehaviorSubject<IssueTracker>(this.element);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: IssueTracker) {
    this.messageSource.next(message)
  }

}