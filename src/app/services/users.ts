import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '@features/user/user';
import { UsersResponse } from '@interfaces/req.response';
import { delay, map } from 'rxjs';
interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly #url = 'https://reqres.in/api/users';
  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: [],
  });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  constructor() {
    this.http
      .get<UsersResponse>(this.#url)
      .pipe(
        delay(2000),
        map((usersResponse: UsersResponse) => usersResponse.data)
      )
      .subscribe((users) => {
        this.#state.set({
          loading: false,
          users: users,
        });
      });
  }
}
