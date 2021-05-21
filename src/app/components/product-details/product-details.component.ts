import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { CartService } from "../../cart.service";
import { ProductService  } from "../../product.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  route!: ActivatedRoute;
   cartService!: CartService;
   //productService : ProductService ;
   products!: Product[]; 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
