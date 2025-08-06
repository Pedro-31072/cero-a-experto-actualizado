import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { routes } from '../../app.routes';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-sidemenu',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidemenu {
  private readonly _menu: Routes;
  constructor() {
    this._menu = routes
      .map((route) => route.children ?? [])
      .flat()
      .filter(
        (route) => !(route.path!.includes(':') || route.path!.length === 0)
      );
  }
  get menu() {
    return [...this._menu];
  }
}
