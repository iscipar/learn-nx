import { Injectable } from '@angular/core';
import { UsersService } from '@learn-nx/shared/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class UsersEffects {

  initUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Users Page] Init'),
    exhaustMap(() => this.usersService.getDataApi()
      .pipe(
        map(users => ({ type: '[Users/API] Load Users Success', users })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}