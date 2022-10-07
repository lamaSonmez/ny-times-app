import { Component, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import * as fromSpinnerActions from '@core/store/spinner/spinner.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private _subscriptions = new Subscription();
  
  constructor(
    private _spinner:NgxSpinnerService,
    private _actions:Actions
    ){}


  ngOnInit(): void {
    this._subscriptions.add(createEffect(() => this._actions.pipe(
      ofType(fromSpinnerActions.showSpinner)
    )).subscribe(() => {
      this._spinner.show();
    }));
    this._subscriptions.add(createEffect(() => this._actions.pipe(
      ofType(fromSpinnerActions.showSpinner)
    )).subscribe(() => {
      setTimeout(()=>{
        this._spinner.hide();
      },1000)
    }));
  }


  title = 'ny-times-app';


}
