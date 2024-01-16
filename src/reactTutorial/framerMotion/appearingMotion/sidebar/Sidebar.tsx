import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";
import { SidebarMotion } from "../SidebarMotion";

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
 * Use the "animate" property to change values
 *  e.g.
 *    - x, y
 *    - rotate
 *    - opacity
 * A single value can be set,
 *  e.g. opacity: 1
 * or a set of keyframes to go through
 *  e.g. opacity: [0.3, 1.4, 1]
 *
 * Use the "transition" property to change
 *  e.g.
 *    - duration
 *    - ease type such as easeOut
 *    - transition type e.g. spring (for buttons)  -> see {@link SidebarMotion}
 *    - stiffness, mass (in combination with transition type spring)
 *  They can either be set globally for a component or can be added to a single event e.g. exit
 */
export const Sidebar: React.FC = () => {
  return (
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
  );
};
