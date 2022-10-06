import { createAction, props } from '@ngrx/store';


const actionTypes={
  AlertSuccessType:'[Alert] Success ',
  AlertErrorType:'[Alert] Error ',
  AlertWarningType:'[Alert] Warning'
}

export const Success = createAction(
  actionTypes.AlertSuccessType,
  props<{ message: string }>()

);

export const Warning = createAction(
  actionTypes.AlertWarningType,
  props<{ message: string }>()
)


export const Error = createAction(
  actionTypes.AlertErrorType,
  props<{ message: string }>()

);


