import { Component } from '@angular/core';
import { initUsers } from '@learn-nx/shared/store';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';

@Component({
  selector: 'learn-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app1';

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(initUsers());
  }
}
