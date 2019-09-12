import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import { State } from '../state/product.state';
import { getShowProductCode, getCurrentProduct, getProducts } from '../state/product.selectors';
import { ToggleProductCode, InitializeCurrentProduct, SetCurrentProduct, Load } from '../state/product.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  componentActive = true;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select(getCurrentProduct),
      takeWhile(() => this.componentActive) // automatically unsubscribe when componentActive becomes false.
    ).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.store.dispatch(new Load());

    this.store.pipe(select(getProducts)).subscribe(
      (products: Product[]) => this.products = products
    );

    this.store.pipe(select(getShowProductCode)).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new SetCurrentProduct(product));
  }

}
