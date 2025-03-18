import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-and-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [DynamicDataService],
  templateUrl: './add-and-edit-product.component.html',
  styleUrl: './add-and-edit-product.component.css'
})
export class AddAndEditProductComponent implements OnInit {
  productForm!: FormGroup;
  ID: any;

  constructor(private fb: FormBuilder, private dynamicdata: DynamicDataService, private router: Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.getID();
  }

  getID() {
    this.ID = Number(this.active.snapshot.paramMap.get("id"));
    
    if (this.ID) {
      this.dynamicdata.getDataByID(this.ID).subscribe(p => {
        this.productForm.patchValue({
          thumbnail: p.thumbnail,
          title: p.title,
          description: p.description,
          price: p.price,
          rating: p.rating
        });
      });
    }
  }

  initForm() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      thumbnail: ['', Validators.required]
    });
  }

  add() {
    if (this.productForm.valid) {
      this.dynamicdata.getAllData().subscribe((products: any[]) => {
        // Find the highest existing ID and increment it
        const lastId = products.length > 0 
          ? Math.max(...products.map(p => Number(p.id))) + 1 
          : 1;
  
        const newProduct = { 
          ...this.productForm.value, 
          id: String(lastId) // Convert the new ID to a string
        };
  
        this.dynamicdata.addNewData(newProduct).subscribe({
          next: (response) => {
            console.log('Product successfully added:', response);
            this.router.navigateByUrl('/shop');
          },
          error: (err) => {
            console.error('Error adding product:', err);
          }
        });
      });
    }
  }
  

  Edit() {
    if (this.productForm.valid) {
      this.dynamicdata.EditData(this.productForm.value, this.ID).subscribe({
        next: (response) => {
          console.log('Product successfully updated:', response);
          this.router.navigateByUrl('/shop');
        },
        error: (err) => {
          console.error('Error updating product:', err);
        }
      });
    }
  }
}
