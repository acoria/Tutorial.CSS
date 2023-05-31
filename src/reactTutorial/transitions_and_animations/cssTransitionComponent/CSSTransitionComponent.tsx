import { useState } from "react";
import { Sidebar } from "./Sidebar";

/* I could not get CSSTransition to support unmounting/mounting. It brakes the in-animation */
export const CSSTransitionComponent: React.FC = () => {
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
