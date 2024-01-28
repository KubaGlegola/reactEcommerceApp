import { BACK_END_URL } from "../constants/api";

export function addProductToFavourties({ params: { productId } }) {
  return fetch(`${BACK_END_URL}/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: +productId,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}
