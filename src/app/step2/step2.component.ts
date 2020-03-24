import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataAccessService } from '../data/data-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  editUserForm :FormGroup;
  usersMovies : FormGroup
  constructor(private fb : FormBuilder, private dataService : DataAccessService, private router : Router) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
     movies:this.fb.array([
      
     ])
  });
  this.editUserForm.setControl('movies',this.setExistingMovies(this.dataService.person.movies))
  
  }
  setExistingMovies(movies){
    const formArray =  new FormArray([]);
    movies.forEach(element => {
      formArray.push(this.fb.group({
        movieName:[element.movieName,Validators.required],
        moviePoster:[element.moviePoster]
      }));
    });
    return formArray;
  } 
  get AllMovies(){
    return this.editUserForm.get('movies') as FormArray;
  }
  AddNewMovie(){

    
    this.AllMovies.push(this.fb.group({
      movieName:['',Validators.required],
      moviePoster:'',
    }));
  }

  Back(){
    this.dataService.addStep2(this.editUserForm.value);
    this.router.navigate(["/step1"])
  }
  Submit(){

    if(!this.editUserForm.valid){
      alert("Form not valid");
    }
    else{
    this.dataService.addStep2(this.editUserForm.value);
    //console.log(this.editUserForm.value)
    this.dataService.submitForm();
    }
  }
  removeMovie(index){
    this.AllMovies.removeAt(index);

  }

}
