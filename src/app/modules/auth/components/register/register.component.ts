import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '@auth/store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private  _subscriptions = new Subscription();
  
  returnUrl:string='';
  username:string='';
  password:string='';
  constructor(
    private _route:ActivatedRoute,
    private _store:Store
  ) { 

  }
 

  ngOnInit(): void {
    this._subscriptions.add(
      this._route.queryParamMap.subscribe(params=>this.returnUrl=params.get('returnUlr')||'')
    );
  }

  onSubmit(): void {
		this._store.dispatch(fromAuthActions.register({
      params:{
        username:this.username,
        password:this.password
      },
      returnUrl:this.returnUrl}));
  }

  
  ngOnDestroy(): void {
    //unsubscribe to avoid memeory leak
   this._subscriptions.unsubscribe();
  }


}
