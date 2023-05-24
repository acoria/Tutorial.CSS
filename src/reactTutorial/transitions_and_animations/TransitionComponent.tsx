import { useState } from "react";
import { Transition } from "react-transition-group";

export const TransitionComponent: React.FC = () => {
  const [showTransitionContent, setShowTransitionContent] = useState(true);

  const toggleVisibility = () => {
    setShowTransitionContent((previous) => !previous);
  };

  return (
    <>
      <button onClick={toggleVisibility}>Toggle Transition</button>
      {/* in defines whether the children should be rendered/visible
          timeout defines the time between state changes
            entering -> entered
            exiting -> exited 
      */}
      <Transition in={showTransitionContent} timeout={500}>
        {/* There are four states: entering, entered, exiting, exited */}
        {(state) => (
          <p>
            Current transition state: <h1>{state}</h1>
          </p>
        )}
      </Transition>
    </>
  );
};
// 