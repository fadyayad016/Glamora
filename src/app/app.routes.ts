import { Routes } from '@angular/router';
import { MasterproductComponent } from './Components/masterproduct/masterproduct.component';
import { ProductComponent } from './Components/product/product.component';
import { Component } from '@angular/core';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductDetailesComponent } from './Components/product-detailes/product-detailes.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MasterproductComponent },
    { path: 'Showproduct', component: ProductComponent },
    { path: 'productdtailes/:id', component: ProductDetailesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: ErrorComponent },

];
