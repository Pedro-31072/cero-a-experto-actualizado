import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '@interfaces/req.response';
import { UsersService } from '@services/users';
import { Title } from '@shared/title/title';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
@Component({
  selector: 'app-user',
  imports: [Title],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  public usersService = inject(UsersService);
  public route = inject(ActivatedRoute);
  private params = this.route.paramMap.pipe(map((el) => el.get('id') || ''));
  public user = toSignal<IUser>(
    this.params.pipe(switchMap((id) => this.usersService.getUserById(id)))
  );
  public userName = computed(() => this.user()?.name);
  constructor() {
    effect(() => {
      if (this.user()) {
        console.log('Usuario cargado:', this.user());
      }
    });
  }
  ngOnInit(): void {}
}
