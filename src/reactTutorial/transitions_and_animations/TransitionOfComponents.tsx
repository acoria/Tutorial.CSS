import { Transition } from "react-transition-group";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const TransitionComponent: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleVisibility = () => {
    setShowSidebar((previous) => !previous);
  };

  return (
    <>
      <button onClick={toggleVisibility}>Toggle sidebar</button>
      <Transition in={showSidebar} timeout={1000}>
        {(state) => <p>{state}</p>}
        {/* {showSidebar ? <Sidebar visible={showSidebar} /> : <></>} */}
      </Transition>
    </>
  );
};