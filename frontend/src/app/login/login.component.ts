import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  login() {
    this.httpClient.post('http://localhost:8080/api/users/login',
      {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }

}
