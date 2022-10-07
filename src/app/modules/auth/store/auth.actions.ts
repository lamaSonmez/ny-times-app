import {createAction, props} from "@ngrx/store";

const actionTypes ={
    LoginActionType:'[Login-Page] Login Action',
    LoginSuccessActionType:'[Login-Form] Login Success',
    LoginFailureActionType:'[Login-Form] Login Failure',

    LogoutActionType:'[Login-Page] Logout Action',
    
    StoreTokenType:'[Auth Effect] | Store Token',
    RedirectType:'[Auth Effect] | Redirect ',

    RegisterAccount:'[Register | Page] register account'
  }

  export const Login = createAction(
    actionTypes.LoginActionType,
    props<{params:{ username: string,password:string },returnUrl:string}>()
  );

  export const LoginSuccess = createAction(
    actionTypes.LoginSuccessActionType,
    props<{username:string, accessToken:string,returnUrl:string|'' }>()
  );
  
  export const LoginFailure = createAction(
    actionTypes.LoginFailureActionType,
    props<{ error: any }>()
  );

  export const Logout = createAction(
    actionTypes.LogoutActionType,
  );

  export const StoreToken = createAction(
    actionTypes.StoreTokenType,
    props<{ accessToken:string,returnUrl:string|'' }>()
  )
  
  export const Redirect = createAction(
    actionTypes.RedirectType,
    props<{ returnUrl:string|'' }>()
  
  )


  export const register = createAction(
    actionTypes.RegisterAccount,
    props<{params:{ username: string,password:string },returnUrl:string}>()
  );