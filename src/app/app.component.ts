import { Component, OnInit } from '@angular/core';
import { DataAccessService } from './data/data-access.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{



  title = 'multistep-form';
}
