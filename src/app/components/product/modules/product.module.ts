import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(CategoryRoutes),
    
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
