import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';
import { WorkModel } from '../models/work-model';
import { Reminder } from '../models/reminder';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teste1 = new Reminder()
  teste = new WorkModel() //variavel que vai adicionar
  constructor(public workService: WorksService, public reminderService : ReminderService) { }

  ngOnInit() {
    console.log(this.workService.listOfWorks)
    console.log(this.reminderService.listOfReminder)

  }

  addWorks(){
    
    this.workService.addWorks(this.teste)
    this.teste = new WorkModel()//Limpando a variavel para acrescentar a outra
    console.log(this.workService.listOfWorks)
  }


  deleteWork(posicao : number){
    this.workService.deleteWork(posicao)
  }

  // Lembrete

  addReminder(){
    this.reminderService.addReminder(this.teste1)
    this.teste1 = new Reminder()
    console.log(this.reminderService.listOfReminder)
  }

  deleteReminder(posicao : number){
    this.reminderService.deleteReminder(posicao)
  }

  // somatorio(soma: number){}

}
