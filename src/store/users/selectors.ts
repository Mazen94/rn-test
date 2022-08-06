import { RootState } from '_store/rootReducers';

export const usersSelector = (state: RootState) => state.users.users;
