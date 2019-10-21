import { Injectable } from '@angular/core';
import { WorkModel } from '../models/work-model';



@Injectable({
  providedIn: 'root'
}) 
export class WorksService {
  listOfWorks: Array<WorkModel> = new Array<WorkModel>();

  constructor() { }

  addWorks(work: WorkModel){
    this.listOfWorks.push(work)
  }
  
  deleteWork(posicao : number){
      this.listOfWorks.splice(posicao,1)
  }
}
