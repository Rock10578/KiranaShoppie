import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor(private http: HttpClient){ }

  getCategory() {
    // This is the normal method when used backend
    // return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
    // Since I've not created any backend so added proxy to bypass CORS policy
    /*
    proxy.conf.json file added to handle CORS
    {
      "/api": {
        "target": "https://freeapi.miniprojectideas.com",
        "secure": true,
        "changeOrigin": true,
        "logLevel": "debug"
      }
    }

    and 
    in angular.json file
    "options": {
      "proxyConfig": "proxy.conf.json"
    }
    */
    return this.http.get('/api/BigBasket/' + Constant.METHODS.GET_ALL_CATEGORY);
  }

  saveProduct(obj: any) {
    return this.http.post('/api/BigBasket/' + Constant.METHODS.CREATE_PRODUCT, obj);
  }

  getProducts() {
    return this.http.get('/api/BigBasket/' + Constant.METHODS.GET_ALL_PRODUCT);
  }

  updateProduct(item: any) {
    return this.http.post('/api/BigBasket/' + Constant.METHODS.UPDATE_PRODUCT, item);
  }
}