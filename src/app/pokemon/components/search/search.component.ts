import { Component, output } from '@angular/core';

@Component({
  selector: 'pokemon-search',
  imports: [],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  query = output<string>();

  sendQuery(value: string){
    this.query.emit(value);
  }
}
