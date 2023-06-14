import { CSSTransition } from "react-transition-group";
import "./Sidebar.css";

/* The classes passed to the CSSTransition classNames attribute are concatenated with the states to:
    - <className>-enter -> is called on enter, so when the element appears
    - <className>-enter-active -> is set during the entering process (so the duration defined in timeout)
    - <className>-enter-done -> is set once the timeout is reached
    - <className>-exit -> is called when the element starts to unmount
    - <className>-exit-active -> is set during the exiting process
    - <className>-exit-done -> is set once the element disappeared
    
    e.g.
    the below "slide" class will be concatenated to
      slide-enter, slide-enter-active etc.
*/
export const Sidebar: React.FC<{ visible: boolean }> = (props) => {
  return (
    <CSSTransition
      in={props.visible}
      timeout={1000}
      // classNames="slide"
      //instead of passing a className as a string, an object can be used
      classNames={{
        enter: "hiddenSidebar",
        // enterActive 
        enterActive: "showSidebar",
        // enterDone is 
        enterDone: "changeColorOnDone",
        exitActive: "hideSidebar",
        //is theoretically unnecessary since the element is removed from the DOM for this example
        exitDone: "hiddenSidebar",
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className="sidebar">Sidebar</div>
    </CSSTransition>
  );
};
