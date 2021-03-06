import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductManagerItemComponent } from './product-manager/product-manager-item/product-manager-item.component';
import { CartComponent } from './cart/cart.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ProductEditComponent } from './product-manager/product-edit/product-edit.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductManagerComponent,
    ProductManagerItemComponent,
    CartComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class FeaturesModule { }
