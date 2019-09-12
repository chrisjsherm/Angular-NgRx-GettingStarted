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
  Create = '[Product] Create',
  CreateSuccess = '[Product] Create Success ',
  CreateFailure = '[Product] Create Failure',
  Delete = '[Product] Delete',
  DeleteSuccess = '[Product] Delete Success ',
  DeleteFailure = '[Product] Delete Failure',
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

export class Create implements Action {
  readonly type = ProductActionTypes.Create;

  constructor(public payload: Product) { }
}

export class CreateSuccess implements Action {
  readonly type = ProductActionTypes.CreateSuccess;

  constructor(public payload: Product) { }
}

export class CreateFailure implements Action {
  readonly type = ProductActionTypes.CreateFailure;

  constructor(public payload: string) { }
}

export class Delete implements Action {
  readonly type = ProductActionTypes.Delete;

  constructor(public payload: Product) { }
}

export class DeleteSuccess implements Action {
  readonly type = ProductActionTypes.DeleteSuccess;
}

export class DeleteFailure implements Action {
  readonly type = ProductActionTypes.DeleteFailure;

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
  UpdateFailure |
  Create |
  CreateSuccess |
  CreateFailure |
  Delete |
  DeleteSuccess |
  DeleteFailure;
