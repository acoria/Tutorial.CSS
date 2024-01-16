import { motion } from "framer-motion";

export const Child: React.FC = () => {
  return (
    <motion.div
      style={{ width: "2rem", height: "2rem", backgroundColor: "green" }}
      //the child can define its own behavior which is triggered
      //when it is triggered for the parent
      variants={{
        visible: { scale: 1.5, opacity: 1, y: 20, x: 20 },
        hidden: { scale: 0, opacity: 0 },
      }}
      transition={{ duration: 2 }}
    ></motion.div>
  );
};
