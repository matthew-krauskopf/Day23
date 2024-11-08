import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFacade } from './features/auth/auth.facade';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  authFacade: AuthFacade = inject(AuthFacade);

  ngOnInit() {
    this.authFacade.performCachedLogin();
  }
}
