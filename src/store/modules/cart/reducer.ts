import { Reducer } from "redux";
import produce from "immer";

import { addProductToCartSuccess } from "./actions";
import { ICartState, ActionTypes } from "./types";

type ActionRequest = ReturnType<typeof addProductToCartSuccess>;

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState, ActionRequest> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  return produce(state, (draft) => {
    switch (type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = payload;
        const indexProduct = draft.items.findIndex(
          ({ product: { id } }) => id === product.id
        );

        if (indexProduct > -1) {
          draft.items[indexProduct].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(payload.product.id);
        break;
      }
      default:
        return draft;
    }
  });
};

export default cart;
