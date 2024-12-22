import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
   divBgColor: string='bg-primary';
   isDiv2Active: boolean = false;
   isActive: boolean = false;

   num1: string ='';
   num2: string ='';

   addRedclass(){
    this.divBgColor = "bg-danger"
   }

   addBlueClass(){
    this.divBgColor = "bg-primary"
   }
    
   toggleDiv2class(){
    this.isDiv2Active = !this.isDiv2Active
   }
   
   selectedState: string ='';

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[]=[
      {studId:1,totalmarks:23, gender : 'male', name:'AAA',city:'Pune',isActive : true},
      {studId:2,totalmarks:45,gender : 'female',name:'BB',city:'Mumbai',isActive : false},
      {studId:3,totalmarks:95,gender : 'male',name:'CC',city:'Jalgo',isActive : true},
      {studId:4,totalmarks:65,gender : 'female',name:'DD',city:'Nagpur',isActive : false},
      {studId:5,totalmarks:85,gender : 'male',name:'EE',city:'Amravati',isActive : true},
      {studId:6,totalmarks:15,gender : 'female',name:'FFF',city:'Thane',isActive : false},
  ];

  customerStyle: any = {
    'color' : 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius':'50%'
  };
}
