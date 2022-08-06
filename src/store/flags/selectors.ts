import { createSelector } from 'reselect';

import { FlagsState } from '_store/flags/stateTypes';
import { RootState } from '_store/rootReducers';

export const createFlagSelector = (name: string, defaultValue = false) => {
  return createSelector(
    flagsSelector,
    (flags: FlagsState) => flags[name] ?? defaultValue,
  );
};

export const flagsSelector = (state: RootState) => state.flags;
