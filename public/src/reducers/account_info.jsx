const userAccountInfo = {
  first_name: null,
  last_name: null,
  email: null,
  phone_number: null
};

export const SET_USER_ACCOUNT_INFO = 'SET_USER_ACCOUNT_INFO';

export function accountInfoReducer(state = userAccountInfo, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_ACCOUNT_INFO:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}

