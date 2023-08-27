import { Ingredient } from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
// import flourImage from "../assets/flourBrown.png";
import { useEffect, useState } from "react";

export const IngredientList: React.FC = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const response = await import("../assets/flourBrown.png");
      setImage(response.default);
    };
    loadImage();
  }, []);

  const flour = <Ingredient name="Flour" amount="1600g" image={image} />;

  return (
    <div className={styles.ingredientList}>
      {flour}
      {flour}
      {flour}
    </div>
  );
};
