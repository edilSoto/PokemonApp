import { Routes } from '@angular/router';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { PokemonLayoutComponent } from './layouts/pokemon-layout/pokemon-layout.component';

export const pokemonRoutes: Routes = [
    {
        path: '',
        component: PokemonLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }

];

export default pokemonRoutes;
