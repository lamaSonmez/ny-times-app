import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '@auth/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl:string='';
  username:string='';
  password:string='';
  constructor(
    private _route:ActivatedRoute,
    private _store:Store
  ) { 

  }

  ngOnInit(): void {
    this._route.queryParamMap.subscribe(params=>this.returnUrl=params.get('returnUlr')||'');
    
  }

  onSubmit(): void {
		this._store.dispatch(fromAuthActions.Login({
      params:{
        username:this.username,
        password:this.password
      },
      returnUrl:this.returnUrl}));

  }

}
