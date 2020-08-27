import { IProduct, ActionTypes } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      product,
    },
  };
}
