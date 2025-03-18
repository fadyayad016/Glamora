import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-details',
  standalone: true,
  imports: [HttpClientModule],
  providers: [DynamicDataService],
  templateUrl: './shopping-details.component.html',
  styleUrl: './shopping-details.component.css'
})
export class ShoppingDetailsComponent implements OnInit {
  ID: number = 0;
  prd:any
  constructor(private dynamicdata: DynamicDataService, private route: ActivatedRoute) {



  }

  ngOnInit(): void {
this.getID()
this.getDataByID()
  }
  getID() {
    this.ID = Number(this.route.snapshot.paramMap.get("id"))
  }
  
  getDataByID() {
    this.dynamicdata.getDataByID(this.ID).subscribe({
      next: (p) => this.prd = p,
      error: (err) => console.error('Error fetching data:', err),
      complete: () => console.log('Data fetching completed.')
    });
  }
  

}

