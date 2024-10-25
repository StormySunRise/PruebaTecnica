import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full',
    },
    {
        path: 'principal',
        loadChildren: () => import('./components/categories/modules/category.module').then(m => m.CategoryModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}