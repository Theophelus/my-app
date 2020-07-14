import { Component, OnInit } from '@angular/core';

import { IProduct } from './iProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  // selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  // private _productService;
  pageTitle: String = 'Product List';
  showImage: boolean = false;
  filteredProducts: IProduct[];
  errorMessage: string;
  products: IProduct[] = [];

  constructor(private productService: ProductsService) {

  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
  }


  onRatingClicked(message: String): void {
    this.pageTitle = "Product List:" + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) == -1
    )

  }



  ngOnInit(): void {
    // console.log("oh wow");
    this.productService.getProducts()
      .subscribe(

        // res => console.log(res)

        {
          next: products => {
            this.products = products
            this.filteredProducts = this.products;
          },


          error: err => this.errorMessage = err

        }
      )
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
