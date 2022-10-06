import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import * as AuthSelectors  from '@auth/store/auth.selectors';
import * as AuthActions  from '@auth/store/auth.actions';
import { SlideInOutAnimation } from '../../animations';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations:[SlideInOutAnimation]

})
export class NavigationBarComponent implements OnInit {
  animationState = 'out';
  isAuthenticated=false;

  constructor(
    private _store:Store,
    private _router:Router
  ) { }
  

  ngOnInit(): void {
    this._store.select(AuthSelectors.selectIsAuthenticated).subscribe(result=>this.isAuthenticated=result)
  }

  toggleMenu(className: string) {
    if (className === 'nav-mobile-row') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }
  Logout(){
        this._store.dispatch(AuthActions.Logout());
        this._router.navigateByUrl('/auth/login');
  }
}
