import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  registerAccount:boolean=false;
  constructor() { }

  showRegisterForm(event:any){
    event.preventDefault();
    this.registerAccount=true;
  }

  ngOnInit(): void {
  }

}
