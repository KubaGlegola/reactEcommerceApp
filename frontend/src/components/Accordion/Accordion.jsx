import { useState } from "react";
import ARROW_ICON from "../../assets/arrow.svg";
import styles from "./Accordion.module.css";
export function Accordion({ items }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={item.title}
            onClick={() => {
              setActiveItemIndex(index);
            }}
          >
            <div className={styles.item}>
              <p>{item.title}</p>
              <img
                src={ARROW_ICON}
                alt=""
                className={activeItemIndex === index ? styles.expanded : ""}
              />
            </div>
            {activeItemIndex === index && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
}
