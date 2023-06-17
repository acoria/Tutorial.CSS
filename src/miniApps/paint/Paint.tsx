import { ReactNode } from "react";
import styles from "./Paint.module.css";
import { Pixel } from "./Pixel";

const findReactNodeFromDomNode = (node: any): any => {
  const reactNodeId = Object.keys(node).find((key) =>
    key.startsWith("__reactFiber")
  );
  if (reactNodeId !== undefined) {
    return node[reactNodeId];
  } else {
    return findReactNodeFromDomNode(node.parentNode);
  }
};

const handleOnMouseUp = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  event.preventDefault();
  console.log("Mouse drag for select");
  const selection = window.getSelection();

  const startingNode = selection?.anchorNode;
  const reactStartingNode = findReactNodeFromDomNode(startingNode);
  console.log(`Selection started in box with id: ${reactStartingNode.key}`);

  const finishNode = selection?.focusNode;
  const reactFinishNode = findReactNodeFromDomNode(finishNode);
  console.log(`Selection finished in box with id: ${reactFinishNode.key}`);
};

export const Paint: React.FC = () => {
  const buildBoxes = () => {
    const boxes: ReactNode[] = [];
    for (let i = 1; i <= 600; i++) {
      boxes.push(<Pixel key={i} id={1} eventHandler={handleOnMouseUp} />);
    }
    return boxes;
  };

  return <div className={styles.paint}>{buildBoxes()}</div>;
};
