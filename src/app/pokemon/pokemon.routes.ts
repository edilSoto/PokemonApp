import { Routes } from '@angular/router';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { PokemonLayoutComponent } from './layouts/pokemon-layout/pokemon-layout.component';
import { RandomPageComponent } from './pages/random-page/random-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

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
                path: 'random',
                component: RandomPageComponent
            },
            {
                path: 'types',
                component: TypesPageComponent
            },            
            {
                path: 'search',
                component: SearchPageComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }

];

export default pokemonRoutes;
