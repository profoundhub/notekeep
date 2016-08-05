import { RouterConfig } from '@angular/router';
import { MainContainers, Notes, About, Auth } from './containers';
import { AuthService } from './services';

export const routes: RouterConfig = [
  {
    path: '',
    component: MainContainers,
    canActivate: [AuthService],
    children: [
      { path: '', component: Notes },
      { path: 'about', component: About }
    ]
  },
  { path: 'auth', component: Auth },
  { path: '**', redirectTo: '' }
];
