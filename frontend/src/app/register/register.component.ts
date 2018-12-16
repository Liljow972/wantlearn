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

  onNameKeyUp(event: any) {
    this.email = event.target.value;
    this.username = event.target.value;
    this.password = event.target.value;
    this.bio = event.target.value;
  }

  register() {
    console.log(this.email);
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

