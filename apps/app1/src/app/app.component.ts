import { Component } from '@angular/core';
import { UsersEntity, initUsers, loadUsersSuccess } from '@learn-nx/shared/store';
import { Store } from '@ngrx/store';
import { UsersService } from './services/users.service';

@Component({
  selector: 'learn-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app1';

  constructor(
    private store: Store<any>,
    private usersService: UsersService
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(initUsers());
    
    this.usersService.getDataApi()
      .subscribe((response: UsersEntity[]) => {
        this.store.dispatch(loadUsersSuccess(
          {users: response}
        ));
      });
  }
}
