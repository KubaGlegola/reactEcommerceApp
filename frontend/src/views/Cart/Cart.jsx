import { useContext } from "react";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const [cartItems] = useContext(CartContext);
  console.log(cartItems);

  return (
    <FlexContainer>
      {cartItems ? (
        <>
          <CartProductsList products={cartItems} />
          <CartSummary products={cartItems} />
        </>
      ) : (
        "Koszyk jest pusty"
      )}
    </FlexContainer>
  );
}
