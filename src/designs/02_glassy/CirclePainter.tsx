export const CirclePainter: React.FC = () => {
  const screenWidth = window.innerWidth / 16;
  const screenHeight = window.innerHeight / 16;
  console.log(`rem - width: ${screenWidth}`);
  console.log(`rem - height: ${screenHeight}`);

  //120 : 60

  const circle = (x: number, y: number, radius: number) => {
    return (
      <circle
        stroke="#000000"
        cx={`${x}rem`}
        cy={`${y}rem`}
        r={`${radius}rem`}
      />
    );
  };

  const horizontal = screenWidth > screenHeight;
  const radius = (horizontalRadius: number) => {
    return horizontal
      ? screenWidth / horizontalRadius
      : screenHeight / (horizontalRadius / 2);
  };

  return (
    <svg>
      <defs>
        <clipPath id="svgCircles">
          {circle(screenWidth / 4, screenHeight / 60, 12)}
          {/* {circle(screenWidth / 4, screenHeight / 60, radius(10))} */}
          {circle(screenWidth / 12, screenHeight * 0.7, radius(8))}
          {circle(screenWidth * 0.75, screenWidth * 0.3, radius(6))}
          {circle(screenWidth / 2.4, screenWidth / 6, radius(12))}
          {/* {circle(60, 80, 10)}
          {circle(0, 110, 15)}
          {circle(90, 140, 8)} */}
        </clipPath>
      </defs>
    </svg>
  );
};
