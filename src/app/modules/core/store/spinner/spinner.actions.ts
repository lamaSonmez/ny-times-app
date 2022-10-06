import { createAction } from '@ngrx/store';

const actionTypes={
  showSpinnerType:'[Spinner] Show Spinner',
  hideSpinnerType:'[Spinner] Hide Spinner',
}

export const showSpinner = createAction(
actionTypes.showSpinnerType
);

export const hideSpinner = createAction(
 actionTypes.hideSpinnerType
);
