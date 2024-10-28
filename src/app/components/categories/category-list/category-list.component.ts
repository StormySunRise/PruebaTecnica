import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../enviroments/enviroment';
import { ProductListComponent } from '../../product/product-list/product-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit  {
  categories: any [] = [];
  selectedCategory: any;
  public apiUrl = environment.apiUrl;
  favorites: any[] = [];
  public totalpromedio: number = 0;

  constructor(
    private categoriesService: CategoriesService,
    private dialog: MatDialog

  ){}

  ngOnInit(): void {
    this.loadCategories();
    this.getFavoritesList();
  }

  async loadCategories() {
    this.categories = await this.categoriesService.getCategories(this.apiUrl);
    console.log(this.categories);
    
  }

  openProductListDialog(categoryId: number) {
    const dialogRef = this.dialog.open(ProductListComponent, {
      data: { id: categoryId }, 
      width: '600px' 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.getFavoritesList(); 
    });
  }

  async getFavoritesList(){
    this.favorites = await this.categoriesService.getFavorites(this.apiUrl);
    this.promedio();
    console.log(this.favorites);
    
  }
  
  promedio(): number {
    if(this.favorites.length > 0){
      
      const total = this.favorites.flatMap(b => b.producto).reduce((valor, producto) => valor + producto.precio, 0);
      console.log(total);
      
      this.totalpromedio = total / this.favorites.length;
      console.log(this.totalpromedio);
    }
      return this.totalpromedio ;
  }
  
  async deleteFavorite(id: number) {
    console.log(id);
    
    try {
      await this.categoriesService.deleteFavorites(this.apiUrl, id);
      this.favorites = this.favorites.filter(favorite => favorite.id !== id);
      console.log(`Favorito con ID ${id} eliminado`);
    } catch (error) {
      console.error('Error al eliminar el favorito:', error);
    }
  }

}
