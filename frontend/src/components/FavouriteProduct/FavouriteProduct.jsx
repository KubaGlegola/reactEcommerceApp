import { useFetcher } from "react-router-dom";
import styles from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import CART_ICON from "../../assets/cart.svg";
import { Price } from "../Price/Price";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function FavouriteProduct({ favourite }) {
  const { Form } = useFetcher();
  const product = favourite.product;

  const price = <Price product={product} />;

  const [, addProductToCart] = useContext(CartContext);

  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} alt="" />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          {price}
        </p>
        <div className={styles.buttonRow}>
          <Form
            method="DELETE"
            action={`/delete-from-favourites/${favourite.id}`}
          >
            <button>
              <img src={REMOVE_ICON} alt="" />
              Usuń
            </button>
          </Form>
          <button
            onClick={() => {
              addProductToCart(product);
            }}
          >
            <img src={CART_ICON} alt="" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
