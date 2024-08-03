import styles from "./Svg.module.css";

/* There are three different possibilities to import an svg file.
  - inline: Add the <svg> into your dom
  - import as image: 
      import water from "./water.svg";
      and use it in an <img src={water} /> tag
  - import as React component
      - The advantage here is that the colors can be adjusted if the svg is set up the following:
        <path fill="currentColor" stroke="currentColor" d="M48.9472656,44.5224609c0"/>
          -> now the fill and stroke can be changed with the "color" attribute
        <path fill="current" stroke="current" d="M30.8798828,50.9316406c"/>
          -> now the fill and stroke can be changed with the "fill" or "stroke" attribute

      - The strokeWidth can be adjusted to thicken an image.

  The viewBox defined the grid size of the image.
    e.g. <svg viewBox="0 0 100 200"> defines that the grid of the image starts at 0/0 and ends at 100/200.
         If a width/height is defined, e.g. 100px/200px, each grid cell will be 1px.
  
  The viewport is defined by width/height.

 */

import water from "./waterColorful.svg";
import { ReactComponent as WaterDroplet } from "./water.svg";

export const Svg: React.FC = () => {
  return (
    <>
      <div className={styles.embeddedImage}>
        <img src={water} alt="water" />
      </div>

      <WaterDroplet
        fill="red"
        stroke="blue"
        strokeWidth={1.5}
        width={"20rem"}
        color="green"
        /* Set the colors directly or using the className */
        className={styles.waterDroplet}
      />

      <svg width={"20rem"} viewBox="0 0 100 100">
        <path
          d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
          transform="translate(85,100) rotate(180)"
        ></path>
      </svg>

      <div className={styles.myFirstSvg}>
        <h3>Hello first svg:</h3>
        <svg width={"20rem"} viewBox="0 0 450 400">
          <rect
            // position inside the image
            x={50}
            y={10}
            // rounded corners
            rx="20"
            width={200}
            height={300}
            fill={"purple"}
            stroke={"black"}
            strokeWidth={10}
            // add styles or set them like e.g. fill above
            style={{
              opacity: 0.5,
              transform: "rotateZ(45deg) translateX(10rem) translateY(-10rem)",
            }}
          />
        </svg>
      </div>
    </>
  );
};
