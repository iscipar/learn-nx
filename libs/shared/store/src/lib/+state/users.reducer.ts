import { createReducer, on } from '@ngrx/store';
import { initUsers, loadUsersSuccess } from './users.actions';
import { UsersState } from './users.state';

export const USERS_FEATURE_KEY = 'users';

export const initialState: UsersState = { loading: false, users: [] };

export const usersReducer = createReducer(
  initialState,
  on(initUsers, (state) => {
    return { ... state, loading: true }
  }),
  on(loadUsersSuccess, (state, {users}) => {
    return { ... state, loading: false, users }
  })
);