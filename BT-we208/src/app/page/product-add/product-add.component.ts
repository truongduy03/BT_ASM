import { Component } from '@angular/core';
import { ProductService } from '../product-list/services/product.service';
import { IProduct } from 'src/app/interface/product';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
constructor(private formBuilder:FormBuilder,
private productServices :ProductService){

}
productForm = this.formBuilder.group({
  name:[''],
  price:[0]
})
onHandleSubmit(){
  // if(this.productForm.valid){
  //   const product:IProduct={
  //     // name.this.productForm.value.name||"",
  //     // price:this.productForm.value.price||0,
  //   }
  // }
}
}
