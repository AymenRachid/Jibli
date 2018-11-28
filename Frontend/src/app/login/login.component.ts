import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register: boolean;
  login: boolean;

  constructor() { }

  ngOnInit() {
    this.register = false;
    this.login = true;
  }
  showRegister(){
    this.register = true;
    this.login = false;
  }
  showLogin(){
    this.login = true;
    this.register = false;
  }

}
