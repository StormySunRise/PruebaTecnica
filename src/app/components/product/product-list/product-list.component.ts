import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  @Output() onGuardar: EventEmitter<any[]> = new EventEmitter<any[]>();

  public apiUrl = environment.apiUrl;
  public listProductos : any[] = [];
  public SelectedProducts: number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    public matDialogRef: MatDialogRef<ProductListComponent>,
    private productService: ProductService
  ){
    this.matDialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.getProducts(); 
  }

  async getProducts(){
    const allProducts = await this.productService.getProducts(this.apiUrl);
    this.listProductos = allProducts.filter((product:any) => product.categoriaId === this.data.id);
    console.log(this.listProductos);
  }

  optionsSelected(productId: number){
      const index = this.SelectedProducts.indexOf(productId);
      if(index === -1){
        this.SelectedProducts.push(productId);
      }
      else{
        this.SelectedProducts.splice(index,1);
      }
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
  
  async saveFavorites(SelectedProducts: number){
    console.log(SelectedProducts);
    
   SelectedProducts = await this.productService.saveFavorites(this.apiUrl, SelectedProducts);
    return SelectedProducts;
  }
  async guardar() {
    for (const productId of this.SelectedProducts) {
      await this.saveFavorites(productId);
    }
    this.onGuardar.emit(this.SelectedProducts);
    this.matDialogRef.close();
  }
}
