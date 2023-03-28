import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { Products2 } from 'src/app/interfaces/products2';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  productlist2: Products2[]=[]
  data: any = []
  nom: any;
constructor( private route: ActivatedRoute, private api : ApiService){
  this.nom = this.route.snapshot.paramMap.get('id');

 this.details1()
}



details1(){
  this.api.details1id(this.nom).subscribe((res:any)=>{
    this.productlist2 = res.meals
    console.log(res.meals)
    
  })
}
}
