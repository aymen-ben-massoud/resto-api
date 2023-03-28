import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { Products2 } from 'src/app/interfaces/products2';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  productlist: Products[]=[]
  productlist2: Products2[]=[]
constructor(private api : ApiService){

this.getprodcut()
this.getprodcut2()
}

getprodcut(){
  return this.api.getproduct().subscribe((res:any)=>{
  
  this.productlist= res.categories
  
})


}

getprodcut2(){
  return this.api.getproduct2().subscribe((res:any)=>{

  this.productlist2= res.drinks
  
})


}

}
