import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryRoutes } from './category.routing';
import { ProductModule } from '../../product/modules/product.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    ProductModule

    
  ],
  exports: [CategoryListComponent]
})
export class CategoryModule { }
