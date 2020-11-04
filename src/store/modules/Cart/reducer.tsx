/* eslint-disable no-case-declarations */
/* eslint-disable import/no-extraneous-dependencies */
import produce from 'immer';

const INITIAL_STATE: any = [];
export default function Cart(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '@cart/ADD_PRODUCT':
      // eslint-disable-next-line no-case-declarations
      const indexProduct = state.findIndex(
        (product: any) => product.id === action.payload.id
      );
      if (indexProduct >= 0) {
        return produce(state, draft => {
          draft[indexProduct].qtd += 1;
        });
      }
      action.payload.qtd = 1;
      return [...state, action.payload];
    case '@cart/REMOVE':
      const indexProductRemove = state.findIndex(
        (product: any) => product.id === action.id
      );
      if (indexProductRemove >= 0) {
        return produce(state, draft => {
          draft.splice(indexProductRemove, 1);
        });
      }
      break;
    default:
      return state;
  }
}
