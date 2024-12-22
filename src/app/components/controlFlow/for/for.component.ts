import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  dayNumber: string = '';

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[]=[
      {studId:1, name:'AAA',city:'Pune',isActive : false},
      {studId:2,name:'BB',city:'Mumbai',isActive : false},
      {studId:3,name:'CC',city:'Jalgo',isActive : true},
      {studId:4,name:'DD',city:'Nagpur',isActive : false},
      {studId:5,name:'EE',city:'Amravati',isActive : false},
      {studId:6,name:'FFF',city:'Thane',isActive : false},
  ];
}
