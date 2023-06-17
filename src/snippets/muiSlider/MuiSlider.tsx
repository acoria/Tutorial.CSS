import { Mark } from "@mui/base";
import { Slider, styled } from "@mui/material";
import styles from "./MuiSlider.module.css";

enum SliderValue {
  SHORT,
  MIDDLE,
  LONG,
}

const CustomSlider = styled(Slider)({
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

const CustomColoredSlider = styled(CustomSlider)<{ primary_color: string }>`
  color: ${(props: any) => props.primary_color};
`;

export const MuiSlider: React.FC<{
  sliderPosition?: number;
  onValueChange: (value: SliderValue) => void;
}> = (props) => {
  const primaryColor = "#642472";
  const buildMarks = (): Mark[] => {
    const marks: Mark[] = [];
    const entries = Object.entries(SliderValue);
    for (let i = 0; i < Math.round(entries.length / 2); i++) {
      marks.push({
        value: Number(entries[i][0]),
        label: entries[i][1].toString().toLowerCase(),
      });
    }
    return marks;
  };

  const marks = buildMarks();

  const findSliderValueByValue = (value: number): SliderValue => {
    const element = Object.entries(SliderValue).find((element) => {
      return element[0] === value.toString();
    });
    return element as unknown as SliderValue;
  };

  const getDefaultValue = (): number => {
    const sliderPosition = props.sliderPosition ?? findFirst();
    const defaultValue = sliderPosition as any;
    return Number(defaultValue[0]);
  };

  const findFirst = (): number => {
    const first = (Object.entries(SliderValue).at(0) as any)[0];
    return first;
  };
  return (
    <CustomColoredSlider
      primary_color={primaryColor}
      className={styles.slider}
      defaultValue={getDefaultValue()}
      step={marks[0].value}
      min={marks[0].value}
      max={marks[marks.length - 1].value}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={(event: Event, value: any) => {
        let selectedValue: number;
        if (typeof value === "number") {
          selectedValue = value;
        } else {
          selectedValue = value[0];
        }
        props.onValueChange(findSliderValueByValue(selectedValue));
      }}
    />
  );
};
