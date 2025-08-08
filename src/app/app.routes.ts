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
        title: 'Change Detection',
      },
      {
        path: 'control-flow',
        loadComponent: () =>
          import('./features/control-flow/control-flow').then(
            (c) => c.ControlFlow
          ),
        title: 'Control Flow',
      },
      {
        path: 'defer-options',
        loadComponent: () =>
          import('./features/defer-options/defer-options').then(
            (c) => c.DeferOptions
          ),
        title: 'Defer Options',
      },
      {
        path: 'defer-views',
        loadComponent: () =>
          import('./features/defer-views/defer-views').then(
            (c) => c.DeferViews
          ),
        title: 'Defer Views',
      },
      {
        path: 'user/:id',
        loadComponent: () => import('./features/user/user').then((c) => c.User),
        title: 'User',
      },
      {
        path: 'user-list',
        loadComponent: () =>
          import('./features/users/users').then((c) => c.Users),
        title: 'Users',
      },
      {
        path: 'view-transition',
        loadComponent: () =>
          import('./features/view-transition/view-transition').then(
            (c) => c.ViewTransition
          ),
        title: 'View Transition',
      },
      {
        path: 'view-transition-2',
        loadComponent: () =>
          import('./features/view-transition-2/view-transition').then(
            (c) => c.ViewTransition2
          ),
        title: 'View Transition 2',
      },
      {
        path: '',
        redirectTo: 'view-transition',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
