import { Paint } from "./miniApps/paint/Paint";
import { PersonSelect } from "./personSelect/PersonSelect";
import { PersonTurn } from "./personSelect/PersonTurn";
import { AnimatingList } from "./reactTutorial/animatingList/AnimatingList";
import { Component as FadingBoxComponent } from "./reactTutorial/mvce/FadingBoxComponent";
import { TransitionComponent } from "./reactTutorial/transitions_and_animations/TransitionComponent";
import { CSSTransitionComponent } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/CSSTransitionComponent";
import { CSSTransitionSidebar } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/sidebar/CSSTransitionSidebar";
import { TransitionOfSidebar } from "./reactTutorial/transitions_and_animations/transitionComponent/TransitionOfSidebar";
import { LoadingSpinner } from "./snippets/loadingSpinner/LoadingSpinner";
import { MuiSlider } from "./snippets/muiSlider/MuiSlider";
import { Triangle } from "./snippets/triangle/Triangle";
import { Test } from "./test/Test";

function App() {
  /* <Triangle />
      <hr></hr>
      <hr></hr> */
  // return <TransitionOfSidebar />;
  // return <CSSTransitionSidebar />
  /* <TransitionComponent /> */
  // <AnimatingList />
  /* <FadingBoxComponent /> */

  /* <LoadingSpinner />
      <div style={{ backgroundColor: "blue", height: "10vh" }}></div> */

  // return <Test />;
  // return <PersonSelect />;
  // return <PersonTurn />;
  // return <CSSTransitionComponent />;
  return <Paint />;
}

export default App;
