import { Component, OnInit } from '@angular/core';
import { Login } from '../api/models/login';
import { LoginService } from '../api/services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login!: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.login = new Login();
  }

  public fazerLogin(): void {
    this.loginService.fazerLogin(this.login).subscribe(data => {
      console.log(data);
    });
  }


}
