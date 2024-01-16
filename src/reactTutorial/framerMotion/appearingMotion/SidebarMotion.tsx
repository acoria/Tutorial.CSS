import { useState } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { AnimatePresence, motion } from "framer-motion";

/**
 * To stop react from removing an element before it has finished animating, the element to be removed
 * can be wrapped into an "AnimatePresence" component. This component will wait for framer animations to
 * finish and then let react remove it from the dom.
 */
export const SidebarMotion: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleVisibility = () => {
    setShowSidebar((previous) => !previous);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <motion.button
        onClick={toggleVisibility}
        whileHover={{ scale: 1.1, backgroundColor: "lightgray" }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        Toggle sidebar
      </motion.button>
      <AnimatePresence>{showSidebar && <Sidebar />}</AnimatePresence>
    </div>
  );
};
