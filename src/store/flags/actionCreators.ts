import { StoreFlagAction } from '_store/flags/actionsTypes';

export const storeFlag = (name: string, value: boolean): StoreFlagAction => {
  return {
    type: name,
    payload: { value },
  };
};
