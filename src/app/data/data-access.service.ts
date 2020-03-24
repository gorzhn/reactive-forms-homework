import { Injectable } from '@angular/core';
import { Person } from './model/person-model';
import {People} from './people-data';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  person : Person = new Person();
  people  = People;
  constructor(private router : Router) { }


  addStep1(data){
    this.person.firstName = data.firstName;
    this.person.lastName = data.lastName;
    this.person.zip = data.zip;
    


  }

  addStep2(data){
    this.person.movies = [];
    data.movies.forEach(element => {
      if(!this.person.movies.some(x => x.movieName === element.movieName))
         this.person.movies.push(element)      
     
    }
    );
      
  }


  getPersonData(){
    return this.person;
  }


  personToEdit(data){
    this.person = data;
  }

  deletePerson(person){
    let index = this.people.findIndex((e) => e.id == person.id) ;
    this.people.splice(index,1);
  }

  addPerson(){
    var p = new Person();
    this.people.push(p)
    return p;

  }
  submitForm(){

    let index = this.people.findIndex((e) => e.firstName == this.person.firstName);
    
    if(index === -1){
     
      this.people.push(this.person);
    }
    else{

      this.people[index] = this.person;
    }

    this.router.navigate(['/home'])
  }
}
