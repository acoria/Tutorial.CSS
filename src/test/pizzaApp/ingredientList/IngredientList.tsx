import { Ingredient } from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import flourImage from "../assets/grain.png";
import saltImage from "../assets/salt.png";
import waterImage from "../assets/water.png";
import honeyImage from "../assets/honey.png";
import yeastImage from "../assets/yeast.png";

export const IngredientList: React.FC = () => {
  const flour = <Ingredient name="Flour" amount="1600g" image={flourImage} />;
  const salt = <Ingredient name="Salt" amount="63g" image={saltImage} />;
  const water = <Ingredient name="Water" amount="250ml" image={waterImage} />;
  const honey = <Ingredient name="Honey" amount="50ml" image={honeyImage} />;
  const yeast = <Ingredient name="Yeast" amount="5g" image={yeastImage} />;

  return (
    <>
      <div className={styles.ingredientList}>
        {flour}
        {salt}
        {water}
      </div>
      <div className={styles.ingredientList}>
        {honey}
        {yeast}
      </div>
    </>
  );
};
