import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../Models/icategory';

@Component({
  selector: 'app-masterproduct',
  standalone: true,
  imports: [ProductComponent,FormsModule],
  templateUrl: './masterproduct.component.html',
  styleUrl: './masterproduct.component.css'
})
export class MasterproductComponent {
  SelectedId:number;
  catlist:Icategory[];
  totalproductprice:number
  
  constructor(){
    this.SelectedId=0
this.totalproductprice=0
    this.catlist=[
      {
        id:1,
        name:'beauty'
      },
      {
        id:2,
        name:'fragrances'
      }
    ]
    
  }
  RecievedPrice(total :number){
this.totalproductprice=total
  }
}
