import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./AnimatingList.module.css";

export const AnimatingList: React.FC = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addEntry = () => {
    setNumbers((previous) => {
      const newNumbers = [...previous];
      newNumbers.push((previous[previous.length - 1] ?? 0) + 1);
      return newNumbers;
    });
  };

  const removeEntry = (key: number) =>
    setNumbers((previous) => {
      return previous.filter((number) => number !== key);
    });

  /*  Transition Group is in charge of handling elements inside a list. It determines whether an element is part of the list
    (if it was added or removed) and a takes over the handling of the "in" property by setting it depending on the elements.

    To animate a list, the following steps are necessary:
    - The ul element is replaced with the TransitionGroup component
    - Since this makes a div out of the element, the component tag is used to switch it back to a ul element.
    - The li elements need to be wrapped into Transition or CSSTransition components.
 */
  const listItems = numbers.map((number) => (
    <CSSTransition
      key={number}
      timeout={2000}
      classNames={{
        enter: styles.fadeEnter,
        enterActive: styles.fadeEnterActive,
        enterDone: styles.fadeEnterDone,
        exitActive: styles.fadeExitActive,
        exitDone: styles.fadeExitDone,
      }}
    >
      <li
        className={`${styles.animatingListItem}`}
        onClick={() => removeEntry(number)}
      >
        {number}
      </li>
    </CSSTransition>
  ));

  return (
    <div className={styles.animatingList}>
      <button onClick={addEntry}>Add entry</button>
      <TransitionGroup component="ul">{listItems}</TransitionGroup>
    </div>
  );
};
