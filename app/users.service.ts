import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    {
      id: 'One-user',
      firstName: 'Abhi',
      lastname: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true, 
    },
    {
      id: 'Two-User',
      firstName: 'Akhil',
      lastname: 'Reddy',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    {
      id: 'Three-user',
      firstName: 'Sandeep',
      lastname: 'Krishna',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Four-user',
      firstName: 'Vaishnavi',
      lastname: 'prakash',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    {
      id: 'Five-user',
      firstName: 'Jaswanth',
      lastname: 'Reddy',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Six-user',
      firstName: 'Vijay',
      lastname: 'Patil',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    {
      id: 'Seven-user',
      firstName: 'Arjun',
      lastname: 'Reddy',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Eight-user',
      firstName: 'Suma',
      lastname: 'Keerthana',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    
  ];
  constructor() {}
}
