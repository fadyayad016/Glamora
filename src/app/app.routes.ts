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
import { UserTokenComponent } from './Components/user-token/user-token.component';
import { userGuard } from '../Guards/user.guard';

export const routes: Routes = [

    // { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '', component: UserTokenComponent },
    { path: 'home', component: MasterproductComponent,canActivate:[userGuard]},
    // { path: 'Showproduct', component: ProductComponent },
    { path: 'productdtailes/:id', component: ProductDetailesComponent, canActivate: [userGuard] },
    { path: 'reactive', component: ReactiveFormComponent, canActivate: [userGuard] },
    { path: 'shop', component: ShoppingComponent, canActivate: [userGuard] },
    { path: 'shop/:id', component: ShoppingDetailsComponent, canActivate: [userGuard] },
    { path: 'addandedit', component: AddAndEditProductComponent, canActivate: [userGuard] },
    { path: 'addandedit/:id', component: AddAndEditProductComponent, canActivate: [userGuard] },
    // { path: 'about', component: AboutComponent },
    { path: 'Users', component: UserDashboardComponent, canActivate: [userGuard] },
    { path: 'order', loadComponent: () => import('./Components/order/order.component').then(m => m.OrderComponent), canActivate: [userGuard] },  // Lazy Loading 
    { path: 'Users/:id', component: UserdetailesComponent, canActivate: [userGuard] },
    { path: '**', component: ErrorComponent, canActivate: [userGuard] },

];
