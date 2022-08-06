import { Action } from 'redux';

import User from '_models/User';

export const FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS';

interface FetchUsersSuccessAction extends Action<'users/FETCH_USERS_SUCCESS'> {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

export type UsersActions = FetchUsersSuccessAction;
