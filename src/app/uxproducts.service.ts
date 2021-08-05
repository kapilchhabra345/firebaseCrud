import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UxproductsService {
    url='https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/product.json';
  
    private headers=new HttpHeaders({'Content-Type':'kapil application/json'})
  
  constructor(private http:HttpClient) { 
    
  }


  saveProducts(products:any[]){
   // return this.http.post(this.url,products);
   return this.http.put(this.url,products,{headers:this.headers});
  }

  fetchProduct(){
    return this.http.get(this.url);
  }

  getDataTitle(){
    return this.http.get('https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/data Title.json');
  }

  // deleteProducts(){
  //   return this.http.get(this.url)
  // }


}
