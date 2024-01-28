import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import styles from "./CartProductsList.module.css";

export function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cartProductsList}>
        <h2>Koszyk</h2>
        <div>
          {products &&
            products.map((product) => {
              return (
                <CartProduct key={product.id} product={product}></CartProduct>
              );
            })}
        </div>
      </div>
    </CenteredContent>
  );
}
