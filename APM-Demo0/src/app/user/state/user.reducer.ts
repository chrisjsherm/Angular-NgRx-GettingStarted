import { UserState } from './user.state';
import { UserActions, UserActionTypes } from './user.actions';

export const initialState: UserState = {
  maskUserName: true,
};

export function reducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload,
      };

    default:
      return state;
  }
}
