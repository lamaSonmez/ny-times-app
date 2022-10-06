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
 
  constructor(
    private store:Store,
  ) { }
  

  ngOnInit(): void {
  }

  toggleMenu(className: string) {
    if (className === 'nav-mobile-row') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }
  Logout(){
    
  }
}
