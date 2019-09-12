import { Product } from '../product';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFailure = '[Product] Load Failure',
  Update = '[Product] Update',
  UpdateSuccess = '[Product] Update Success',
  UpdateFail = '[Product] Update Failure',
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) { }
}

export class LoadFailure implements Action {
  readonly type = ProductActionTypes.LoadFailure;

  constructor(public payload: string) { }
}

export class Update implements Action {
  readonly type = ProductActionTypes.Update;

  constructor(public payload: Product) { }
}

export class UpdateSuccess implements Action {
  readonly type = ProductActionTypes.UpdateSuccess;

  constructor(public payload: Product) { }
}

export class UpdateFailure implements Action {
  readonly type = ProductActionTypes.UpdateFail;

  constructor(public payload: string) { }
}

export type ProductActions =
  ToggleProductCode |
  SetCurrentProduct |
  ClearCurrentProduct |
  InitializeCurrentProduct |
  Load |
  LoadSuccess |
  LoadFailure |
  Update |
  UpdateSuccess |
  UpdateFailure;
