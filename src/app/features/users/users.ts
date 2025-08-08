import { Component } from '@angular/core';
import { UsersService } from '@services/users';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-users',
  imports: [Title],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  constructor(private usersService:UsersService) {}

}
