import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../services/product/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{

  isSidePanelVisible: boolean=false;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": new Date(),
    "categoryId": 2147483647,
    "productImageUrl": "",
    "uerId": 0
  }

  categoryList: any [] = [];
  constructor(private productSrv: Product) {

  }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=> {
      this.categoryList = res.data;
    })
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
}
