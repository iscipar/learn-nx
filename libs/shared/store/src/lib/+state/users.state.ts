import { UsersEntity } from "./users.models";

export interface UsersState {
    loading: boolean,
    users: ReadonlyArray<UsersEntity>;
}