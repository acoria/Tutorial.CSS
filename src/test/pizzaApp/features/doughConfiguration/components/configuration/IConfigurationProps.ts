import { ReactNode } from "react";
import { IConfiguration } from "../../model/IConfiguration";

export interface IConfigurationProps {
  configuration: IConfiguration;
  children: ReactNode | ReactNode[];
}
