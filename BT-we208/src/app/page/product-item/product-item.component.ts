import { Component,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:any;
@Input()index : any;
@Output()onRemove:EventEmitter<any> = new EventEmitter()

removeItem(id:any){
  this.onRemove.emit(id)
}
}
