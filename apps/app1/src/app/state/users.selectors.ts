import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { UsersState } from 'libs/shared/store/src/lib/+state/users.state';

export const selectUsersFeature = (state: AppState) => state.users;

export const selectListUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users
);

export const selectLoading = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.loading
);

