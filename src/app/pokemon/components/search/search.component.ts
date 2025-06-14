import { Component, input, output } from '@angular/core';

@Component({
  selector: 'pokemon-search',
  imports: [],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  query = output<string>();
  isLoading = input<boolean>();
  error = input();

  sendQuery(value: string){
    this.query.emit(value);
  }
}
