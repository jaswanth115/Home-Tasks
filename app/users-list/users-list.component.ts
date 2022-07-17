import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UsersService],
})
export class UsersListComponent implements OnInit {
  userslist: {
    id: string;
    firstName: string;
    lastname: string;
    age: number;
    login: string;
    password: string;
    isDeleted: boolean;
  }[] = [];
  constructor(private userservice: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.userslist = this.userservice.users;
  }
  name: any;
  navigateroute(name1: string) {
    this.name = name1;
    this.router.navigate(['/manage/details'], {
      queryParams: { data: this.name },
    });
  }
}
