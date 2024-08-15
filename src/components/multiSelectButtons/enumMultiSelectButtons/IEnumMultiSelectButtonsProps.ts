import { Enum } from "../toMove/core/types/Enum";
import { IHaveChange } from "../toMove/core/types/IHaveChange";
import { IHaveInitialValue } from "../toMove/core/types/IHavePreselectedValue";
import { IHaveSingleSelect } from "../types/IHaveSingleSelect";

export interface IEnumMultiSelectButtonsProps<T extends Enum>
  extends IHaveChange<T[keyof T]>,
    IHaveSingleSelect,
    IHaveInitialValue<T[keyof T]> {
  enumType: T;
}
