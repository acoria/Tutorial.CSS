type AppColors = { [name: string]: string };

export interface IAppColors extends AppColors {
  appBackgroundColor: string;

  navbarBackgroundColor: string;
  navbarColor: string;

  mainCardListBackground: string,
  mainCardBackgroundColor: string;
  mainCardTitleColor: string;
  mainCardTextColor: string;
  mainCardMainButtonBackgroundColor: string;
  mainCardButtonColor: string;
  mainCardButtonBackgroundColor: string;
}