import axios from "axios";
import { Product } from "../interfaces/product.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })

export class ProductService{
    async getProducts(apiUrl:string ): Promise<any>{
        try{
            const response = await axios.get(`${apiUrl}/api/productos`);
            return response.data
        }   
        catch(error){
            console.log('Se detecto un error ', error);
            throw error;
        }
    }

    async getProductsById(apiUrl:string, id:number ): Promise<any>{
        try{
            const response = await axios.get(`${apiUrl}/api/productos/${id}`);
            return response.data
        }   
        catch(error){
            console.log('Se detecto un error ', error);
            throw error;
        }
    }

    async saveFavorites(apiUrl:string, id:number ): Promise<any>{
        try{
            const response = await axios.post(`${apiUrl}/api/Favoritos/${id}`);
            return response.data
        }   
        catch(error){
            console.log('Se detecto un error ', error);
            throw error;
        }
    }


}