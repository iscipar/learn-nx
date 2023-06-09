import { usersReducer } from "@learn-nx/shared/store";
import { ActionReducerMap } from "@ngrx/store";
import { UsersState } from "libs/shared/store/src/lib/+state/users.state";

export interface AppState {
    users: UsersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    users: usersReducer
}