import { createAction, props } from '@ngrx/store';


const actionTypes={
  ThrowErrorType:'[Effect] Throw Error ',
  CatchErrorType:'[Effect] Catch Error ',
}

export const ThrowError = createAction(
  actionTypes.ThrowErrorType,
  props<{ error: any,url:string }>()

);


export const CatchError = createAction(
  actionTypes.CatchErrorType,
  props<{ error: any }>()

);


