import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

getproduct(){
  return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/categories.php")

}
getproduct2(){
  return this.http.get<any>("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")

}
details2id(id:any){
  return this.http.get<any>("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id)
}
details1id(nom:any){
  return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/filter.php?c="+nom)
}
}