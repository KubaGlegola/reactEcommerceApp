import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import { Price } from "../Price/Price";

export function CartProduct({ product }) {
  const price = <Price product={product} />;
  return (
    <div className={styles.cartProduct}>
      <img src={product.photos[0]} alt="" />
      <div className={styles.cartProductInfo}>
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
          <button>
            <img src={REMOVE_ICON} alt="" />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}
