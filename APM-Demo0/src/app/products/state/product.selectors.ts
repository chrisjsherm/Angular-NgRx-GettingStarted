import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';


// Select the products slice of the state.
const getProductFeatureState = createFeatureSelector<ProductState>('products');

// Use the products state slice to get the showProductCode property.
export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error,
);
