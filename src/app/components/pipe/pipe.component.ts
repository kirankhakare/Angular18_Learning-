import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Observable, map} from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [RouterLink,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe, AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstname:string ="Angular is a fremwork";

  currentDate: Date = new Date();

  currentTime: Observable<Date>= new Observable<Date>;

  student: any = {
    name:'Kiran',
    city:'Pune',
    empId:1234,
    state:''
  };

  constructor(){
    this.currentTime=interval(1000).pipe(map(()=> new Date()));
  }
}
