import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-expandcard',
  templateUrl: './expandcard.component.html',
  styleUrls: ['./expandcard.component.css']
})
export class ExpandcardComponent {
  array:any;
  [x: string]: any;
 
  constructor(private food:FoodService, private router: Router){
    this.array=[];
  }
  ngOnInit():void{
    this.getDetails();
}

getDetails(){
this.food.getData().subscribe((data: any)=>{
  this.array=data;
  this.loader = false;
},
(error)=>{
  this.loader=false;
  this.router.navigate([`app-errordisplay`]);
}
);
}

refresh(): void {
window.location.reload();
}
}





