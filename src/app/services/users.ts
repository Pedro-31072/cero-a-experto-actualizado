import { Injectable, signal } from '@angular/core';
import { User } from '@features/user/user';
interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class Users {
  #state = signal<State>({
    loading: true,
    users: [],
  });
  constructor() {}
}
