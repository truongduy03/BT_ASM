import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  status:boolean = false;
  products:IProduct[]=[]
  product!:IProduct
  
  constructor(private productServices:ProductService){
    this.productServices.getProducts().subscribe(data=>{
      this.products=data
    },error=>console.log(error))
  }
  removeItem(id:any){
    this.productServices.deleteProduct(id).subscribe(()=>{
      this,this.products = this.products.filter(item =>item.id !==id)
    },(error)=>{
      console.log(error.message)
    })
  }
}
