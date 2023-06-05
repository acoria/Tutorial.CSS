import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const TransitionOfComponents: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleVisibility = () => {
    setShowSidebar((previous) => !previous);
  };

  return (
    <>
      <button onClick={toggleVisibility}>Toggle sidebar</button>
      <Sidebar visible={showSidebar} />
    </>
  );
};
