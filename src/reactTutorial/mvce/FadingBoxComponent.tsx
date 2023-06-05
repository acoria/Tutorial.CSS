import { Transition } from "react-transition-group";
import "./fadingBoxComponent.css";
import { useState } from "react";
import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
} from "react-transition-group/Transition";

export const Component: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow((previous) => !previous)}>
        Toggle visibility
      </button>
      <div>{show ? "visible" : "hidden"}</div>
      <Transition in={show} timeout={3000} mountOnEnter unmountOnExit>
        {(state) => {
          const getClassName = () => {
            switch (state) {
              case ENTERING:
                return "fade-in";
              case ENTERED:
                return "visible";
              case EXITING:
                return "fade-out";
              case EXITED:
                return "hidden";
            }
          };

          return <div className={`box ${getClassName()}`}>{state}</div>;
        }}
      </Transition>
    </>
  );
};
