import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function IconMenu() {
  const [cartItems] = useContext(CartContext);
  const countItems = cartItems.length;
  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="" />
          <div className={styles.numberOfProducts}>{countItems}</div>
        </Link>
      </li>
    </ul>
  );
}
