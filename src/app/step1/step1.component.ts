import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
import { DataAccessService } from '../data/data-access.service';
import { Router } from '@angular/router';
import { ZipValidator} from '../zip-validator'; 
import {Cities} from '../data/city-data';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  editUserForm : FormGroup;
  city:string
  cities;

  constructor(private fb : FormBuilder, private dataService : DataAccessService, private router : Router) {
    this.cities = Cities;
   }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      firstName : [this.dataService.getPersonData().firstName, Validators.required],
      lastName : [this.dataService.getPersonData().lastName,Validators.required],
      zip : [this.dataService.getPersonData().zip, ZipValidator],
      
    });
    this.editUserForm.setValidators(this.comparisonValidator())
  }

  public comparisonValidator() : ValidatorFn{
    return (group: FormGroup): ValidationErrors => {
       const control1 = group.controls['zip'];
        this.city = this.cities[control1.value]
          
       return;
 };
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
