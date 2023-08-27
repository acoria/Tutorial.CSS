import styles from "./Ingredient.module.css";
import { IIngredientProps } from "./IIngredientProps";

export const Ingredient: React.FC<IIngredientProps> = (props) => {
  return (
    <div className={styles.ingredient}>
      <div className={styles.ingredientTile}>
        <img src={props.image} alt="wheat" className={styles.image} />
        <div className={styles.ingredientTitle}>{props.name}</div>
        <div className={styles.ingredientAmount}>{props.amount}</div>
      </div>
    </div>
  );
};
