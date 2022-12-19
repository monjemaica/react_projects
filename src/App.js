import { Header } from "./Components/Layout/Header/Header";
import { Meals } from "./Components/Meals/Meals";
import { Cart } from "./Components/Cart/Cart"
import { useState } from "react";

function App() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
    {!isClosed && 
      <Cart isClosed={setIsClosed}/>
    }
      <Header isClosed={setIsClosed}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
