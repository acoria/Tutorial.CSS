import { IAppColors } from "../app/IAppColors";
import { StyledApp } from "../app/StyledApp";

export const BerryGreen: React.FC = () => {
  const appColors: IAppColors = {
    appBackgroundColor: "white",
    navbarBackgroundColor: "#590f26",
    navbarColor: "#f4edd4",
    mainCardListBackground: "#6e1954",
    mainCardBackgroundColor: "#f4edd4",
    mainCardTitleColor: "#590f26",
    mainCardTextColor: "#590f26",
    mainCardMainButtonBackgroundColor: "#6d243f",
    mainCardButtonColor: "#f4edd4",
    mainCardButtonBackgroundColor: "#971821",
  };

  return <StyledApp appColors={appColors} />;
};
