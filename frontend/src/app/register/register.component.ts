import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  username: string = '';
  password: string = '';
  bio: string = '';

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {

  }

  register() {
    this.httpClient.post('http://localhost:8080/api/users/register',
      {
        email: this.email,
        username: this.username,
        password: this.password,
        bio: this.bio
      })
      .subscribe(
        (data: any) => {
          console.log(data);

        }

      )
  }

}

