import { Header } from "./Components/Layout/Header/Header";
import { Meals } from "./Components/Meals/Meals";
import { Cart } from "./Components/Cart/Cart";
import { useState } from "react";

import { CartProvider } from "./data/CartProvider";

function App() {
  const [isClosed, setIsClosed] = useState(true);

  const openModalHandler = () => {
    setIsClosed(false);
  }
  
  const hideModalHandler = () => {
    setIsClosed(true);
  }

  return (
    <CartProvider>
      {!isClosed && <Cart onClosedModel={hideModalHandler} />}
      <Header onShowModel={openModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
