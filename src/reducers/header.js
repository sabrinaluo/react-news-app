import { ENABLE_HEADER_STICKY, DISABLE_HEADER_STICKY } from "../actions";

function header(state = {}, action) {
  switch (action.type) {
    case ENABLE_HEADER_STICKY:
      return Object.assign({}, state, {
        isSticky: true
      });
    case DISABLE_HEADER_STICKY:
      return Object.assign({}, state, {
        isSticky: false
      });
    default:
      return state;
  }
}

export default header;
