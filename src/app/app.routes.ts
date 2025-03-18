import { Routes } from '@angular/router';
import { MasterproductComponent } from './Components/masterproduct/masterproduct.component';
import { ProductComponent } from './Components/product/product.component';
import { Component } from '@angular/core';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductDetailesComponent } from './Components/product-detailes/product-detailes.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import { AddAndEditProductComponent } from './Components/add-and-edit-product/add-and-edit-product.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UserdetailesComponent } from './Components/userdetailes/userdetailes.component';
import { OrderComponent } from './Components/order/order.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MasterproductComponent },
    { path: 'Showproduct', component: ProductComponent },
    { path: 'productdtailes/:id', component: ProductDetailesComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'shop', component: ShoppingComponent },
    { path: 'shop/:id', component: ShoppingDetailsComponent },
    { path: 'addandedit', component: AddAndEditProductComponent },
    {path:'addandedit/:id', component:AddAndEditProductComponent},
    { path: 'about', component: AboutComponent },
    { path: 'Users', component: UserDashboardComponent },
{ path: 'order', loadComponent: () => import('./Components/order/order.component').then(m => m.OrderComponent) },
    { path: 'Users/:id', component: UserdetailesComponent },


    { path: '**', component: ErrorComponent },

];
