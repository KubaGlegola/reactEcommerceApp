import { Product } from "../Product/Product";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Bestsellers.module.css";

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <h2 className={styles.bestsellersHeader}>Sprawdź nasze bestellery</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CenteredContent>
  );
}
