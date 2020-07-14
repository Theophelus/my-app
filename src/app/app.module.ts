import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './components/product-list/convert-to-space-pipe';
import { StarComponent } from './components/star/star.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './components/product-details.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: "products", component: ProductListComponent },
        { path: "products/:id", canActivate: [ProductDetailsGuard], component: ProductDetailsComponent },
        // {path: "home", component: HomeComnent},
        {path: "", component: ProductListComponent},
        {path: "**", redirectTo: "products", pathMatch: "full"},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent, ProductsService]

})
export class AppModule { }

