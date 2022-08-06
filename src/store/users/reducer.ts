import { UsersActions, FETCH_USERS_SUCCESS } from '_store/users/actionsTypes';
import { UsersState } from '_store/users/stateTypes';

export const FLAGS = {
  USERS_LOADING: 'USERS_LOADING',
  USERS_ERROR: 'USERS_ERROR',
  USERS_REFRESHING: 'USERS_REFRESHING',
  USERS_LOADING_MORE: 'USERS_IS_LOADING_MORE',
  USERS_LOADING_MORE_ERROR: 'USERS_LOADING_MORE_ERROR',
  USERS_HAS_LOADED_ALL: 'USERS_HAS_LOADED_ALL',
};

const initialState: UsersState = {
  users: null,
};

export function UsersReducer(
  state = initialState,
  action: UsersActions,
): UsersState {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
