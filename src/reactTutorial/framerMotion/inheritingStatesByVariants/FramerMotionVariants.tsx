import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Child } from "./Child";
import styles from "./FramerMotionVariants.module.css";

/**
 * Variants can be self-defined attributes
 *  e.g. visible, hidden, myHiddenContent
 *
 * Those attributes can be accessed in inherited components.
 */

export const FramerMotionVariants: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setShow((previous) => !previous)}>
          Toggle visibility
        </button>
        <AnimatePresence>
          {show && (
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
    </>
  );
};
