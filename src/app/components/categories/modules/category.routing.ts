import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from '../category-list/category-list.component';

export const CategoryRoutes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
