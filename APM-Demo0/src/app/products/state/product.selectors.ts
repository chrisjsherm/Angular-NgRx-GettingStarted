import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, newProduct } from './product.state';


// Select the products slice of the state.
const getProductFeatureState = createFeatureSelector<ProductState>('products');

// Use the products state slice to get the showProductCode property.
export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId,
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) { // new product.
      return newProduct;
    }

    return currentProductId ? state.products.find(
      product => product.id === currentProductId
    ) : null;
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error,
);
