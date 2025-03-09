import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent implements OnInit {
 
  RecievedId:number=0
  prd:Iproduct|null=null
  constructor(private active:ActivatedRoute,private data:StaticDataService) 
  {
    this.RecievedId=Number(this.active.snapshot.paramMap.get("id")) 
    
  }
  ngOnInit(): void {
    this.prd=this.data.GetProductById(this.RecievedId)

  }
  
}
