import { useState } from "react";
import {
    Transition,
    TransitionGroup,
    TransitionStatus,
} from "react-transition-group";
import {
    ENTERED,
    ENTERING,
    EXITED,
    EXITING
} from "react-transition-group/Transition";
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

  const listItemClass = (transitionStatus: TransitionStatus, key: number) => {
    console.log(`${key} - ${transitionStatus}`);
    switch (transitionStatus) {
      case EXITING:
        return styles.hide;
      case EXITED:
        return styles.hidden;
      case ENTERING:
        return styles.show;
      case ENTERED:
        return styles.visible;
      default:
        return styles.hidden;
    }
  };

  /*  Transition Group is in charge of handling elements inside a list. It determines whether an element is part of the list
    (if it was added or removed) and a takes over the handling of the "in" property by setting it depending on the elements.

    To animate a list, the following steps are necessary:
    - The ul element is replaced with the TransitionGroup component
    - Since this makes a div out of the element, the component tag is used to switch it back to a ul element.
    - The li elements need to be wrapped into Transition or CSSTransition components.
 */
  const listItems = numbers.map((number) => (
    <Transition key={number} timeout={1000}>
      {(state) => (
        <div>
          <div>{state}</div>
          <li
            className={`${styles.animatingListItem} ${listItemClass(
              state,
              number
            )}`}
            onClick={() => removeEntry(number)}
          >
            {number}
          </li>
        </div>
      )}
    </Transition>
  ));

  return (
    <div className={styles.animatingList}>
      <button onClick={addEntry}>Add entry</button>
      <TransitionGroup component="ul">{listItems}</TransitionGroup>
    </div>
  );
};
