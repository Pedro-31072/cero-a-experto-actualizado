import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '@features/user/user';
interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly #url = "https://reqres.in/api/users"
  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: [],
  });
  constructor() {}
}
