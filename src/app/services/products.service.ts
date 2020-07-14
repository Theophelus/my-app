import { Injectable } from '@angular/core';
import { IProduct } from '../components/product-list/iProduct';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError, tap} from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
// import (HttpClient) from '@angular/common/http';

// import * as products from '../api/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private productURL = '../../assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this.productURL)

      .pipe(
        tap(res => console.log(`All  ${JSON.stringify(res)}`)
        
        ),
        catchError(this.handleError),
      )

  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err instanceof ErrorEvent) {
      errorMessage = `An error occur ${err.error.message}`;
    } else {
      errorMessage = `Server return code: ${err.status},error message: ${err.message}`;
    }
    // throw new Error("Method not implemented.");
    console.log(errorMessage);

    return throwError(errorMessage);
  }

}
