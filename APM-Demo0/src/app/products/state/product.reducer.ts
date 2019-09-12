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

    default:
      return state;
  }
}
