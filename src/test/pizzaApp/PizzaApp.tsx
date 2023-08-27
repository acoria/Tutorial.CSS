import styles from "./PizzaApp.module.css";
import { IngredientList } from "./ingredientList/IngredientList";

export const PizzaApp: React.FC = () => {
  return (
    <div className={styles.pizzaApp}>
      <IngredientList />
    </div>
  );
};
