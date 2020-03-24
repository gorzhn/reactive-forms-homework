import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data/data-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  people;
  constructor(private dataService : DataAccessService, private router : Router) { 
   
  }

  ngOnInit(): void {
    this.people = this.dataService.people;

  }
  editPerson(person){
    this.dataService.personToEdit(person);
    this.router.navigate(['step1'])
  }

  deletePerson(person){
    this.dataService.deletePerson(person);
  }
  addPerson(){
    var p  = this.dataService.addPerson();
    this.editPerson(p);

  }

}
