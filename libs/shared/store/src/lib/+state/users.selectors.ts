import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from 'libs/shared/store/src/lib/+state/users.state';
import { USERS_FEATURE_KEY } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

export const selectListUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);

export const selectLoading = createSelector(
  selectUsersState,
  (state: UsersState) => state.loading
);

