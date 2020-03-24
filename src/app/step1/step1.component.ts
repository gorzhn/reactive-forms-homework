import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { DataAccessService } from '../data/data-access.service';
import { Router } from '@angular/router';
import { ZipValidator} from '../zip-validator'; 
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  editUserForm : FormGroup;


  constructor(private fb : FormBuilder, private dataService : DataAccessService, private router : Router) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      firstName : [this.dataService.getPersonData().firstName, Validators.required],
      lastName : [this.dataService.getPersonData().lastName,Validators.required],
      zip : [this.dataService.getPersonData().zip, ZipValidator],
    })
  }

  nextStep(){
    if(this.editUserForm.valid){
    this.dataService.addStep1(this.editUserForm.value);
    this.router.navigate(['/step2'])
    }
    else{
      alert("You haven't filled out the required fields yet");
    }
  }

}
