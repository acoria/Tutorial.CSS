import { useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

/* The Transition component is a wrapper for components that are animated/faded out of sight.
   By removing the component, the DOM is less bloated, has slightly better performance and improves accessibility.
   Since removing a component native stops animations instantly when a component is removed from the DOM 
   (e.g. the fading out of a component), the Transition component can be used to wait for an animation to finish before removing it.

   The Transition component is part of the react-transition-group library. It does not have the best typescript support (types missing) 
   so adding it needs additional steps:
      - install react-transition-group
      - install the types for it (e.g. @types/react-transition-group": "^4.4.6")
      - import the Transition component like this: import { Transition } from "react-transition-group";

    The Transition component
      - has four states:
         - entering
         - entered
         - exiting
         - exited
      
      - takes attributes:
         - in (boolean): this toggles the state between enter and exit
         - timeout (milliseconds or an object): how long should it take to switch from entering to entered and from exiting to exited
            object: {enter: milliseconds, exit: milliseconds} e.g. { enter: 400, exit: 1000 }
         - mountOnEnter/unmountOnExit: places/removes the element from the DOM
         - callback functions (() => void) for the timing events:
            - onEnter: called right before the component starts entering
            - onEntering: called when the entering started
            - onEntered: called when the component entered
            - onExit
            - onExiting
            - onExited
*/
export const TransitionComponent: React.FC = () => {
  const [showTransitionContent, setShowTransitionContent] = useState(true);

  const toggleVisibility = () => {
    setShowTransitionContent((previous) => !previous);
  };

  const opacity = (state: TransitionStatus): number => {
    switch (state) {
      case "exiting":
        return 0;
      case "exited":
        return 0;
      default:
        return 1;
    }
  };

  const animationTimeout = {
    enter: 500,
    exit: 500,
  };

  return (
    <>
      <button onClick={toggleVisibility}>Toggle Transition</button>
      {/* 
        - in: defines whether the children should be rendered/visible
        - timeout: defines the time between state changes
            entering -> entered or
            exiting -> exited
          either in milliseconds or as an object with enter/exit attributes
        -  
      */}
      <Transition in={showTransitionContent} timeout={500}>
        {/* There are four states: entering, entered, exiting, exited */}
        {(state) => (
          <>
            <p>
              Current transition state: <h1>{state}</h1>
            </p>
          </>
        )}
      </Transition>
      <Transition
        in={showTransitionContent}
        timeout={animationTimeout}
        mountOnEnter
        unmountOnExit
        onEntered={() => console.log("Entered")}
      >
        {(state) => (
          <>
            <div
              style={{
                backgroundColor: "blue",
                width: "20vw",
                height: "20vh",
                transition: "opacity 1s",
                opacity: opacity(state),
              }}
            ></div>
          </>
        )}
      </Transition>
    </>
  );
};
//
