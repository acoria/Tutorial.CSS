import { CSSTransition } from "react-transition-group";
import "./Sidebar.css";

/* The classes passed to the CSSTransition classNames attribute are concatenated with the states to:
    - <className>-enter
    - <className>-enter-active
    - <className>-enter-done
    - <className>-exit
    - <className>-exit-active
    - <className>-exit-done
    
    e.g.
    the below "slide" class will be concatenated to 
      slide-enter, slide-enter-active etc.
*/
export const Sidebar: React.FC<{ visible: boolean }> = (props) => {
  return (
    <CSSTransition
      in={props.visible}
      timeout={1000}
      classNames="slide"
      /* instead of passing a className as a string, an object can be used
      classNames={{
        enter: "hideSidebar",
        enterActive: "showSidebar",
        enterDone: "changeColorOnDone",
        exitActive: "hideSidebar",
        exitDone: "hideSidebar",
      }}
      */

      /* breaks the animation */
      // mountOnEnter
      // unmountOnExit
    >
      <div className="sidebar">Sidebar</div>
    </CSSTransition>
  );
};
