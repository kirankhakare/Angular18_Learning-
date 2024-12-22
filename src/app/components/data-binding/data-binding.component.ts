import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
   //string , number , date , boolean

   courseName: string ="angular18";
   select : string ="Maharastra";
   inputType ="radio";
   rollNo :number =1234;
   isIndian: boolean = true;
   currentDate: Date=new Date();

   //Signal
   firstName = signal("Kiran");
   constructor(){
   
   }
   //Create Function in TS
   showAlert(massage : string){
      alert(massage);
   }

   changeCoursename(){
    this.courseName ="React Js";
    this.firstName.set("Shra");
   }
}
