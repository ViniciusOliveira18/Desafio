import { Injectable } from '@angular/core';
import { Reminder } from '../models/reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  listOfReminder: Array<Reminder> = new Array<Reminder>();

  constructor() { }

  addReminder(reminder: Reminder){
    this.listOfReminder.push(reminder)
  }

  deleteReminder(posicao : number){
    this.listOfReminder.splice(posicao, 1)
  }
  
}
