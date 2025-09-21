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
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "uerId": 0
  }

  categoryList: any [] = [];
  productsList: any [] = [];
  constructor(private productSrv: Product) { }

  ngOnInit(): void {
    this.getAllCategory()
    this.getAllProducts()
  }

  getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=> {
      this.categoryList = res.data;
    })
  }
  
  getAllProducts() {
    this.productSrv.getProducts().subscribe((res:any)=> {
      this.productsList = res.data;
      debugger;
      console.log(this.productsList)
    })
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Product Created')
        this.getAllProducts();
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(item: any){
    this.productObj = item;
    this.openSidePanel()
  }

  onUpdate(item: any){
    this.productSrv.updateProduct(item).subscribe((res: any) => {
      debugger;
      if(res.result) {
        alert("Product updated");
        this.getAllProducts();
      } else {
        alert(res.message)
      }
      
    })

  }

}