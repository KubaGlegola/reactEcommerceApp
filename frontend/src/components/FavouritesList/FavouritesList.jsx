import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

export function FavouritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.FavouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((favourite) => {
            return (
              <FavouriteProduct key={favourite.id} favourite={favourite} />
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
