import { Component, Input, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { ProductDirectiveDirective } from '../../Directive/product-directive.directive';
import { ProductdescriptionPipe } from '../../pipes/productdescription.pipe';
import { JsonPipe, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDirectiveDirective,ProductdescriptionPipe,NgClass,RouterModule,FormsModule,JsonPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges,OnInit {
filterList:Iproduct[]=[];
newproduct: Iproduct = {} as Iproduct;
SelectedId:number;
totalPrice:number;
@Input()recivedId:number=0;
total=output<number>()
constructor(private staticData:StaticDataService){
  this.SelectedId=0
   this.totalPrice=0
  
}


AddNewProduct(){
  this.staticData.postproduct(this.newproduct);
  
   // Close the modal after deletion
   const closeButton = document.querySelector('#addProductModal .btn-close') as HTMLElement;
   
   closeButton?.click();
}

  ngOnInit(): void {
    this.filterList= this.staticData.GetAllProduct()
  }

FiltrateByCatId(){
  this.filterList=this.staticData.GetProductByCatId(this.recivedId)
}
ngOnChanges(): void {
  this.FiltrateByCatId()
}

buy(quantity:any, product:Iproduct){
   // Validate quantity
   if (!quantity || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  // Ensure stock does not go negative
  if (quantity > product.stock) {
    alert("Not enough stock available!");
    return;
  }
  product.stock -=quantity
this.totalPrice +=quantity*product.price
this.total.emit(this.totalPrice)




}

selectedProductId: number | null = null;

setProductToDelete(id: number) {
  this.selectedProductId = id;
}

ProductToDelete() {
  if (this.selectedProductId !== null) {
    this.staticData.deleteProductById(this.selectedProductId);
    
    // Close the modal after deletion
    const closeButton = document.querySelector('#deleteModal .btn-close') as HTMLElement;
    closeButton?.click();
  }
}
openEditModal(productId: number) {
  this.SelectedId = productId;
  let productToEdit = this.staticData.GetProductById(productId);
  
  if (productToEdit) {
    // Clone the object to avoid direct reference issues
    this.newproduct = { ...productToEdit };
  }
}

UpdateProduct() {
  if (this.SelectedId && this.newproduct) {
    this.staticData.editProductById(this.SelectedId, this.newproduct);
    const closeButton = document.querySelector('#editProductModal .btn-close') as HTMLElement;
    closeButton?.click();
  }
}



}
