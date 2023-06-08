import { PersonSelect } from "./personSelect/PersonSelect";
import { AnimatingList } from "./reactTutorial/animatingList/AnimatingList";
import { Component as FadingBoxComponent } from "./reactTutorial/mvce/FadingBoxComponent";
import { TransitionComponent } from "./reactTutorial/transitions_and_animations/TransitionComponent";
import { CSSTransitionComponent } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/CSSTransitionComponent";
import { TransitionOfComponents } from "./reactTutorial/transitions_and_animations/transitionComponent/TransitionOfComponents";
import { LoadingSpinner } from "./snippets/loadingSpinner/LoadingSpinner";
import { Triangle } from "./snippets/triangle/Triangle";
import { Test } from "./test/Test";

function App() {
      {/* <Triangle />
      <hr></hr>
      <hr></hr> */}
      {/* <TransitionOfComponents /> */}
      {/* <CSSTransitionComponent /> */}
      {/* <TransitionComponent /> */}
      // <AnimatingList />
      {/* <FadingBoxComponent /> */}
  {
    /* <LoadingSpinner />
      <div style={{ backgroundColor: "blue", height: "10vh" }}></div> */
  }
  // return <Test />;
  return <PersonSelect />;
}

export default App;
