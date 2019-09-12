import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions,
              private productService: ProductService) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    mergeMap((action: productActions.Load) => {
      return this.productService.getProducts().pipe(
        map((products: Product[]) => (
          new productActions.LoadSuccess(products)
        )),
        catchError(err => of(new productActions.LoadFailure(err))),
      );
    })
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Update),
    map((action: productActions.Update) => action.payload),
    mergeMap((product: Product) => // Merge and flatten nested observable.
      this.productService.updateProduct(product).pipe(
        map(updatedProduct =>
          (new productActions.UpdateSuccess(updatedProduct)),
          catchError(err => of(new productActions.UpdateFailure(err))))
      )
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Create),
    map((action: productActions.Create) => action.payload),
    mergeMap((product: Product) => // Merge and flatten nested observable.
      this.productService.createProduct(product).pipe(
        map(newProduct =>
          (new productActions.CreateSuccess(newProduct)),
          catchError(err => of(new productActions.CreateFailure(err))))
      )
    )
  );

}
