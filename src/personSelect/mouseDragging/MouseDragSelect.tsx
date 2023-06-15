import { ReactNode } from "react";
import styles from "./MouseDragSelect.module.css";
import { Box } from "./Box";

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

export const MouseDragSelect: React.FC = () => {
  const buildBoxes = () => {
    const boxes: ReactNode[] = [];
    for (let i = 1; i <= 600; i++) {
      boxes.push(<Box id={i} eventHandler={handleOnMouseUp} />);
    }
    return boxes;
  };

  return <div className={styles.mouseDragSelect}>{buildBoxes()}</div>;
};
