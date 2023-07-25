import { CSSProperties } from "react";
import { IAppColors } from "./IAppColors";
import styles from "./StyledApp.module.css";
import { Navbar } from "./navbar/Navbar";
import { CardList } from "./cardList/CardList";

export const toCSSColor = (appColors: IAppColors) => {
  const result: any = {};
  for (const prop in appColors) {
    result[`--${prop}`] = (appColors as any)[prop];
  }
  return result as CSSProperties;
};

export const StyledApp: React.FC<{ appColors: IAppColors }> = (props) => {
  return (
    <div style={toCSSColor(props.appColors)} className={styles.background}>
      <Navbar />
      <CardList />
    </div>
  );
};
