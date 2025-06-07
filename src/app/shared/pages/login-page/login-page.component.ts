import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  router = inject(Router);

  click(){
    this.router.navigate(['pokemon'])
  }
}
