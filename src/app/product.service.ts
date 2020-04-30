import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {


    myURL ='http://localhost:8080/angular/';
    constructor(private http: HttpClient) {}

    postData(product){
        return this.http.post<any>(`${this.myURL}addProduct`, product);
    }

    getData(){
        return this.http.get<any>('http://localhost:8080/angular/getAllProduct');
    }

    deleteData(product){
        return this.http.delete<any>(`deleteProduct/${product.productName}`);

    }

    updateData(product){
        return this.http.delete<any>('http://localhost:8080/angular/updateProduct', product)
    }
}