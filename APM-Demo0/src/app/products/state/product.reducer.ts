import { ProductActions, ProductActionTypes } from './product.actions';
import { ProductState, initialState } from './product.state';

export function reducer(
  state: ProductState = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload,
      };

    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProduct: { ...action.payload }
      };

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProduct: null,
      };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProduct: {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0,
        }
      };

    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: '', // Clear previous error.
      };

    case ProductActionTypes.LoadFailure:
      return {
        ...state,
        products: [], // Clear previous values on error.
        error: action.payload,
      };

    default:
      return state;
  }
}