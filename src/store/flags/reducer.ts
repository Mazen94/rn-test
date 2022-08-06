import { StoreFlagAction } from '_store/flags/actionsTypes';
import { FlagsState } from '_store/flags/stateTypes';

const INITIAL_STATE: FlagsState | {} = {};

export function FlagsReducer(state = INITIAL_STATE, action: StoreFlagAction) {
  const { type, payload } = action;
  const matches =
    /(.*)_(LOADING|REFRESHING|ERROR|TRACKING|SHOWING|INVALID_TYPE|DISPLAYED|LOADED|HAS_ACCESS|DOWNLOADING|UNAVAILABLE|SHARING)/.exec(
      type,
    );

  if (!matches) return state;

  return {
    ...state,
    [type]: payload.value,
  };
}
