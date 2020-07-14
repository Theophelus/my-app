import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/iProduct';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  pageTitle: String = 'Product Details';

  product: IProduct;


  constructor(private route: ActivatedRoute, 
    
    private router: Router
    ) { }

  ngOnInit(): void {

    let id = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += `${id}`;

    this.product = {
      "productId": id,
      "productName": "Garden Cart",
      "productCode": "GDC-342",
      "releaseDate": "March-18-2019",
      "description": "15 Gallon carpacity rolling Garden",
      "price": 32.95,
      "starRating": 4,
      "imageUrl": "../../../assets/images/garden-cart.png"
    }

  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
