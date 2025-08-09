import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '@services/users';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-users',
  imports: [Title,RouterLink,NgOptimizedImage],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  constructor(public usersService:UsersService) {}

}
