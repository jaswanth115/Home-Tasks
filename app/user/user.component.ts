import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService],
})
export class UserComponent implements OnInit {
  users: {
    id: string;
    firstName: string;
    lastname: string;
    age: number;
    login: string;
    password: string;
    isDeleted: boolean;
  }[] = [];

  constructor(private userservice: UsersService, public router: Router) {}
  ngOnInit(): void {
    this.users = this.userservice.users;
  }
}
