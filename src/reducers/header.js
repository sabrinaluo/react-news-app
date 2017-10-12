import * as types from "../constants/ActionTypes";

function header(state = {}, action) {
  switch (action.type) {
    case types.ENABLE_HEADER_STICKY:
      return Object.assign({}, state, {
        isSticky: true
      });
    case types.DISABLE_HEADER_STICKY:
      return Object.assign({}, state, {
        isSticky: false
      });
    default:
      return state;
  }
}

export default header;
