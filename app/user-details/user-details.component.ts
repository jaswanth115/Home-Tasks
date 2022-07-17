import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UsersService],
})
export class UserDetailsComponent implements OnInit {
  name: any;
  usersdetail: {
    id: string;
    firstName: string;
    lastname: string;
    age: number;
    login: string;
    password: string;
    isDeleted: boolean;
  }[] = [];

  constructor(
    private userservice: UsersService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.usersdetail = this.userservice.users;
    this.router.queryParams.subscribe((params: any) => {
      this.name = params.data;
    });
  }
}
