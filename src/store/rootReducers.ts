import { combineReducers } from 'redux';

import { FlagsReducer } from '_store/flags/reducer';
import { UsersReducer } from '_store/users/reducer';

export const rootReducer = combineReducers({
  users: UsersReducer,
  flags: FlagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
