export const ENABLE_HEADER_STICKY = "ENABLE_HEADER_STICKY";
export const DISABLE_HEADER_STICKY = "DISABLE_HEADER_STICKY";

export const enableHeaderSticky = () => (dispatch, getState) => {
  const state = getState();
  if (state.header.isSticky) return;
  dispatch({
    type: ENABLE_HEADER_STICKY
  });
};

export const disableHeaderSticky = () => (dispatch, getState) => {
  const state = getState();
  if (!state.header.isSticky) return;
  dispatch({
    type: DISABLE_HEADER_STICKY
  });
};
