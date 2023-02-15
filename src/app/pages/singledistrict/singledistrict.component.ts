import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singledistrict',
  templateUrl: './singledistrict.component.html',
  styleUrls: ['./singledistrict.component.css']
})
export class SingledistrictComponent {
single:any
constructor(private hero:HeroService){}
ngoninit():void{
  let pageId=localStorage.getItem('id');
  let singleDataArray=this.hero.getData();
  this.single=singleDataArray.filter(e=>e.name===pageId)
  console.log(this.single)
}


}
