import CAR_ICON from "../../assets/car.svg";
import RETRUN_ICON from "../../assets/return.svg";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Details.module.css";

export function Details({ product }) {
  const accordionContent = [
    {
      title: "Opis produktu",
      content: product.description,
    },
    {
      title: "Wskazówki pielęgnacyjne",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.pricePLN}zł</p>
      <FullWidthButton isBlack={true}>dodaj do koszyka</FullWidthButton>
      <ul className={styles.extraInfo}>
        <li>
          <img src={CAR_ICON} alt="" />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETRUN_ICON} alt="" />
          Zwrot do 100 dni!
        </li>
      </ul>
      <Accordion items={accordionContent} />
    </div>
  );
}
