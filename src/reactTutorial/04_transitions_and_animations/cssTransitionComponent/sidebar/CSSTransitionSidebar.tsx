import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const CSSTransitionSidebar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <button onClick={() => setShowSidebar((previous) => !previous)}>
        Toggle sidebar
      </button>
      <Sidebar visible={showSidebar}></Sidebar>
    </>
  );
};
