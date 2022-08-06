import { storeFlag } from '_store/flags/actionCreators';
import { UsersActions, FETCH_USERS_SUCCESS } from '_store/users/actionsTypes';
import { FLAGS } from '_store/users/reducer';

import User from '_models/User';

import { get } from '_utils/helpers';

export const fetchUserActionSuccess = (users: User[]): UsersActions => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsers = () => {
  return async (dispatch: any) => {
    dispatch(storeFlag(FLAGS.USERS_LOADING, true));
    try {
      const users: User[] = await get('https://dummyjson.com/users');
      dispatch(fetchUserActionSuccess(users));
    } catch (error) {
      dispatch(storeFlag(FLAGS.USERS_ERROR, true));
    }
    dispatch(storeFlag(FLAGS.USERS_LOADING, false));
  };
};
