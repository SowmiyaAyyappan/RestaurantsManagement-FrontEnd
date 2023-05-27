import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  [x: string]: any;

  array:any;
  searchItem:string='';
  cuisine!: string;
  loader :boolean = true;

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
 
search(){
  if(this.searchItem === ''){
    this.ngOnInit();
    this.refresh();
  }else{
    this.array = this.array.filter((res:any)=>
    {
      return res.cuisine.toLocaleLowerCase()
      .match(this.searchItem.toLocaleLowerCase());
    });
    this.loader = false;
    if(this.array.length===0){
      this.unavailable = true;
    }
  }
}

goto(val:string){
  this.router.navigate([`app-expandcard/${val}`]).then(()=>
  {
  });
}
refresh(): void {
  window.location.reload();
}
}

