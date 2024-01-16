import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Child } from "./Child";
import styles from "./FramerMotion.module.css";

/**
 * Framer Motion is an animation library, installed via "framer-motion"
 * To animate, put a "motion." in front of the element to be animated
 *  e.g. <motion.div>
 *
 * There are three states for an animation:
 *  - initial (state when the element enters the dom)
 *  - animate (when the element is visible)
 *  - exit (state when the element is removed from the dom)
 *
 * The "animate" property can be used to change values
 *  e.g.
 *    - x, y
 *    - rotate
 *    - opacity
 *   A single value can be set,
 *      e.g. opacity: 1
 *   or a set of keyframes to go through
 *      e.g. opacity: [0.3, 1.4, 1]
 *
 * The "transition" property changes
 *  e.g.
 *    - duration
 *    - ease type such as easeOut
 *    - transition type e.g. spring (for buttons)
 *    - stiffness, mass (in combination with transition type spring)
 *  They can either be set globally for a component or can be added to a single event e.g. exit
 *
 * Elements come with events, such as "whileHover", "whileInView" or "whileFocus"
 *
 * Element removal:
 *  To stop react from removing an element before it has finished animating, the element to be removed
 *  can be wrapped into an "AnimatePresence" component. This component will wait for framer animations to
 *  finish and then let react remove it from the dom.
 *
 * Variants can be self-defined attributes
 *  e.g. visible, hidden, myHiddenContent
 *  Those attributes can be accessed in inherited components. -> see {@link Child}
 */
export const FramerMotion: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSquare, setShowSquare] = useState(true);

  const sidebar = (
    <div style={{ marginTop: "1rem" }}>
      <motion.button
        onClick={() => setShowSidebar((previous) => !previous)}
        whileHover={{ scale: 1.1, backgroundColor: "lightgray" }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        Toggle sidebar
      </motion.button>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: "-30vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-30vw", opacity: 0 }}
            // a transition can be specified for individual events e.g.
            // exit={{ x: "-30vw", opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 1, ease: "easeIn" }}
            className={styles.sidebar}
          >
            Sidebar
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const variants = (
    <div>
      <button onClick={() => setShowSquare((previous) => !previous)}>
        Toggle square visibility
      </button>
      <AnimatePresence>
        {showSquare && (
          <motion.div
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="visible"
            exit="hidden"
            transition={{ duration: 2 }}
            className={styles.block}
          >
            <Child />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      {sidebar}
      {variants}
    </>
  );
};
