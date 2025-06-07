import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'pokemon-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './pokemon-layout.component.html',
})
export class PokemonLayoutComponent {

}
