import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,RouterLink,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
 
  studentObj: any = {
    firstName: '',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }
  formValue: any;

  onSubmit(){
    debugger;
    this.formValue = this.studentObj;
  }
  resetForm(){
    this.studentObj = {
      firstName: '',
      lastName:'',
      userName:'',
      city:'',
      state:'',
      zipCode:'',
      isAcceptTerms:false
    }
    this.formValue='';
  }
}
