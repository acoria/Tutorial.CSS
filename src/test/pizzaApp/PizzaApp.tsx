import styles from "./PizzaApp.module.css";
import { IngredientList } from "./ingredientList/IngredientList";
import "./color.css";

export const PizzaApp: React.FC = () => {
  return (
    <div className={styles.pizzaApp}>
      <h1>Pizzateig Rechner</h1>
      <IngredientList />
      <div className={styles.settings}></div>
    </div>
  );
};
