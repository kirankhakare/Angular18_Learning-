import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {

   userList: any [] = [];
   
   constructor(private http:HttpClient){
     this.getAllUser();
   }

   getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        this.userList = res;
    })
   }
}
