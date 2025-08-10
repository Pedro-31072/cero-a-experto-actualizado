import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { IUser } from '@interfaces/req.response';
import { delay } from 'rxjs';
interface State {
  users: IUser[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly #url = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: [],
  });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  constructor() {
    this.http
      .get<IUser[]>(this.#url)
      .pipe(delay(2000))
      .subscribe((users) => {
        this.#state.set({
          loading: false,
          users: users,
        });
      });
  }
  getUserById(id: string) {
    return this.http.get<IUser>(`${this.#url}/${id}`)
    .pipe(delay(2000))
  }
}
