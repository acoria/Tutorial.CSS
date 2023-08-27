import styles from "./PizzaApp.module.css";
import { IngredientList } from "./features/ingredientList/IngredientList";
import "./color.css";
import { DoughConfigurationList } from "./features/doughConfiguration/DoughConfigurationList";

export const PizzaApp: React.FC = () => {
  return (
    <div className={styles.pizzaApp}>
      <h1>Pizzateig Rechner</h1>
      <IngredientList />
      <DoughConfigurationList />
    </div>
  );
};
