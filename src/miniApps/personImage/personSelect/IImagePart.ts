import { BodyPart } from "./BodyParts";

export interface IImagePart {
  bodyPart: BodyPart;
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
  gridRowEnd: number;
}
