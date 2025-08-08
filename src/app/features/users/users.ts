import { Component } from '@angular/core';
import { UsersService } from '@services/users';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  constructor(private usersService:UsersService) {}

}
