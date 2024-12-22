import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = false; 

  num1: string = '';
  num2: string = '';

  isActive: boolean = true;
  selectedState: string ='';

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[]=[
      {studId:1, name:'AAA',city:'Pune',isActive : false},
      {studId:2,name:'BB',city:'Mumbai',isActive : false},
      {studId:3,name:'CC',city:'Jalgo',isActive : true},
      {studId:4,name:'DD',city:'Nagpur',isActive : false},
      {studId:5,name:'EE',city:'Amravati',isActive : false},
      {studId:6,name:'FFF',city:'Thane',isActive : false},
  ];

  showDiv1(){
    this.isDiv1Visiable = true;
  }
  hideDiv1(){
    this.isDiv1Visiable = false;
  }
  toggleDiv2(){
    this.isDiv2Visiable= !this.isDiv2Visiable;
  }
}
