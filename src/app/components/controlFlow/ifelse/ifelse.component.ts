import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
   div1Visiable:boolean = true;
   isWarningDivVisiable:boolean = false;

   showDiv1(){
    this.div1Visiable = true;
   }
   hideDiv1(){
    this.div1Visiable = false;
   }
   toggleDiv2(){
     this.isWarningDivVisiable = !this.isWarningDivVisiable;
   }
}
