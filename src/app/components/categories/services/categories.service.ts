import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})

export class CategoriesService{
    async getCategories(apiUrl:string ): Promise<any>{
        try{
            const response = await axios.get(`${apiUrl}/api/categorias`);
            return response.data
        }   
        catch(error){
            console.log('Se detecto un error ', error);
            throw error;
        }
    }

    async getFavorites(apiUrl:string ): Promise<any>{
        try{
            const response = await axios.get(`${apiUrl}/api/favoritos`);
            return response.data
        }   
        catch(error){
            console.log('Se detecto un error ', error);
            throw error;
        }
    }

    async deleteFavorites(apiUrl:string, id:number ): Promise<any>{
        try{
            const response = await axios.delete(`${apiUrl}/api/favoritos/${id}`);
            return response.data
        }   
        catch(error){
            console.log('Se detecto un error ', error);
            throw error;
        }
    }
    
}