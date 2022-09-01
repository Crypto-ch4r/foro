import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string = 'admin';
  pass:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  entrar(){
    alert('Hola pendeje pute vergue estupide' + this.user + " " + this.pass);
  }
}
