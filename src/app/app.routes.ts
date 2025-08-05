import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then((c) => c.Dashboard),
    children: [
      {
        path: 'change-detection',
        loadComponent: () =>
          import('./features/change-detection/change-detection').then(
            (c) => c.ChangeDetection
          ),
      },
      {
        path: 'control-flow',
        loadComponent: () =>
          import('./features/control-flow/control-flow').then(
            (c) => c.ControlFlow
          ),
      },
      {
        path: 'defer-options',
        loadComponent: () =>
          import('./features/defer-options/defer-options').then(
            (c) => c.DeferOptions
          ),
      },
      {
        path: 'defer-views',
        loadComponent: () =>
          import('./features/defer-views/defer-views').then(
            (c) => c.DeferViews
          ),
      },
      {
        path: 'user/:id',
        loadComponent: () => import('./features/user/user').then((c) => c.User),
      },
      {
        path: 'user-list',
        loadComponent: () =>
          import('./features/users/users').then((c) => c.Users),
      },
      {
        path: 'view-transition',
        loadComponent: () =>
          import('./features/view-transition/view-transition').then(
            (c) => c.ViewTransition
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
