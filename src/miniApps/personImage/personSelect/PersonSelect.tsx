import { BodyPart } from "./BodyParts";
import { IImagePart } from "./IImagePart";
import styles from "./PersonSelect.module.css";
import person from "./person.png";

export const PersonSelect: React.FC = () => {
  const imageParts: IImagePart[] = [
    {
      bodyPart: BodyPart.HEAD,
      gridColumnStart: 10,
      gridColumnEnd: 14,
      gridRowStart: 2,
      gridRowEnd: 5,
    },
    {
      bodyPart: BodyPart.ARM,
      gridColumnStart: 3,
      gridColumnEnd: 6,
      gridRowStart: 4,
      gridRowEnd: 5,
    },
    {
      bodyPart: BodyPart.ARM,
      gridColumnStart: 4,
      gridColumnEnd: 8,
      gridRowStart: 5,
      gridRowEnd: 6,
    },
    {
      bodyPart: BodyPart.ARM,
      gridColumnStart: 6,
      gridColumnEnd: 10,
      gridRowStart: 6,
      gridRowEnd: 7,
    },
    {
      bodyPart: BodyPart.ARM,
      gridColumnStart: 8,
      gridColumnEnd: 10,
      gridRowStart: 7,
      gridRowEnd: 8,
    },
    {
      bodyPart: BodyPart.UPPER_LEG,
      gridColumnStart: 7,
      gridColumnEnd: 14,
      gridRowStart: 12,
      gridRowEnd: 15,
    },
  ];

  const bodyPartDiv = (imagePart: IImagePart) => {
    const clicked = () => {
      console.log(`${imagePart.bodyPart} clicked`);
    };
    return (
      <div
        key={crypto.randomUUID()}
        className={styles.body}
        style={{
          gridColumnStart: imagePart.gridColumnStart,
          gridColumnEnd: imagePart.gridColumnEnd,
          gridRowStart: imagePart.gridRowStart,
          gridRowEnd: imagePart.gridRowEnd,
        }}
        onClick={() => clicked()}
      ></div>
    );
  };

  return (
    <div className={styles.background}>
      <img src={person} alt="Person" />
      <div className={styles.grid}>
        {imageParts.map((imagePart) => bodyPartDiv(imagePart))}
      </div>
    </div>
  );
};
