import { Ingredient } from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import flourImage from "../assets/flourBrown.png";
// import saltImage from "../assets/saltBlue.png";

export const IngredientList: React.FC = () => {
  const flour = <Ingredient name="Flour" amount="1600g" image={flourImage} />;

  return (
    <div className={styles.ingredientList}>
      {flour}
      {flour}
      {flour}
    </div>
  );
};
