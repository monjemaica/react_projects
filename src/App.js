import { MealsSummary } from "./Components/Meals/MealsSummary/MealsSummary";
import { Header } from "./Components/Layout/Header/Header";
import { AvailableMeals } from "./Components/Meals/AvailableMeals/AvailableMeals";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
