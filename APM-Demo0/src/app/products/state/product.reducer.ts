import { ProductActions, ProductActionTypes } from './product.actions';
import { ProductState, initialState, newProduct } from './product.state';

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
        currentProductId: action.payload.id,
      };

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null,
      };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: newProduct.id,
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

    case ProductActionTypes.UpdateSuccess:
      const updatedProducts = state.products.map( // Use `map` to return a new array.
        item => action.payload.id === item.id ? action.payload : item
      );
      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        error: '', // Clear previous error.
      };

    case ProductActionTypes.UpdateFail:
      return {
        ...state,
        error: action.payload,
      };

    case ProductActionTypes.CreateSuccess:
      return {
        ...state,
        products: [
          ...state.products,
          action.payload,
        ],
        error: '', // Clear previous error.
      };

    case ProductActionTypes.CreateFailure:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
