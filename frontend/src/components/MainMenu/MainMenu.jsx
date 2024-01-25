import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

import styles from "./MainMenu.module.css";

export function MainMenu() {
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map((gender) => {
        return (
          <li key={gender.path} className={styles.menuItem}>
            <NavLink to={gender.path}>{gender.categoryName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
