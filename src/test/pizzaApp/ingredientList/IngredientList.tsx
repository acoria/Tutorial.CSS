import { Ingredient } from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import flourImage from "../assets/wheat_brown.png";
import saltImage from "../assets/salt_brown.png";
import waterImage from "../assets/water_brown.png";

export const IngredientList: React.FC = () => {
  const flour = <Ingredient name="Flour" amount="1600g" image={flourImage} />;
  const salt = <Ingredient name="Salt" amount="63g" image={saltImage} />;
  const water = <Ingredient name="Water" amount="250ml" image={waterImage} />;

  return (
    <div className={styles.ingredientList}>
      {flour}
      {salt}
      {water}
    </div>
  );
};
