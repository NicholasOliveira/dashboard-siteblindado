import produce from 'immer';

const types = {
  // Define Types
};

const INITIAL_STATE = {};

export const dataReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case '@cart/ADD_PRODUCT':
      const nextState = produce(state, draftState => {
        draftState = { todo: 'Tweet about it' };
      });
      return nextState;
    default:
      return state;
  }
};
