import { Routes } from '@angular/router';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'pokemon',
        loadChildren: () => import('./pokemon/pokemon.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
