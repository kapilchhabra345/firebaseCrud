import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UxproductsService } from '../uxproducts.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  



  constructor(private _uxproductsService:UxproductsService) { }
  dataTitle=this._uxproductsService.getDataTitle();
  fetching=false;
  products=[
    // {
    //   id:'p1',
    //   name:'laptop',
    //   price:25000
    // },
    // {
    //   id:'p2',
    //   name:'mouse',
    //   price:'50'
    // },
  ];


  onAddProduct(id,name,price){
    if(this.editMode){
     // console.log(this.products[this.editIndex]);
      
     this.products[this.editIndex]={
      id:id.value,
      name:name.value,
      price:price.value
     }
     this.editMode=false;
     this.id.nativeElement.value='';
    this.name.nativeElement.value='';
    this.price.nativeElement.value='';
    }
    else{
      this.products.push({
        id:id.value,
        name:name.value,
        price:price.value
      })
    }
    this.onSaveProduct();
  }

  onSaveProduct(){
   this._uxproductsService.saveProducts(this.products).subscribe(
     (response)=>console.log(response),
     (err)=>console.log(err)
   )
 }

 onFatchProduct(){
   this.fetching=true;
this._uxproductsService.fetchProduct().subscribe(
    (response)=>{
   // console.log(response);
    const myData=JSON.stringify(response);
   // console.log(myData);
    this.products=JSON.parse(myData);
    this.fetching=false;
  },
    (err)=>console.log(err)
)
 }



  onDeleteProduct(id:number){
    if(confirm("do you want to delete this products?")){
     this.products.splice(id,1);
    //this._uxproductsService.deleteProducts().subscribe
    this.onSaveProduct();
    }
  }

 @ViewChild('id')id:ElementRef;
 @ViewChild('name')name:ElementRef;
 @ViewChild('price')price:ElementRef;

  editMode:boolean=false;
  editIndex:number;
  onEditProduct(index:number){
    this.editMode=true;
    this.editIndex=index;
    console.log(this.products[index]);
    this.id.nativeElement.value=this.products[index].id;
    this.name.nativeElement.value=this.products[index].name;
    this.price.nativeElement.value=this.products[index].price;
    
  }

  ngOnInit(): void {
    this.onFatchProduct();
  }
  
  
  



}
