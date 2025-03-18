import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductdescriptionPipe } from '../../pipes/productdescription.pipe';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [HttpClientModule,RouterModule,ProductdescriptionPipe],
  providers: [DynamicDataService],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit {
  data: any[] = [];
  constructor(private dynamicdata: DynamicDataService) { }
  
    // ngDoCheck(): void {
    //   this.getAll();
    // }  

 

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    console.log("text get all")
    this.dynamicdata.getAllData().subscribe(prds => this.data = prds)
  }



 Deleteprd(id: number) {
  this.dynamicdata.deleteDataBYID(id).subscribe({
    next: () => this.getAll(),
    error: err => console.error('Failed to delete item:', err),
    complete: () => console.log('Data is deleted completed.')

  });
}



}
