import { AnimatingList } from "./reactTutorial/animatingList/AnimatingList";
import { Component as FadingBoxComponent } from "./reactTutorial/mvce/FadingBoxComponent";
import { TransitionComponent } from "./reactTutorial/transitions_and_animations/TransitionComponent";
import { CSSTransitionComponent } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/CSSTransitionComponent";
import { TransitionOfComponents } from "./reactTutorial/transitions_and_animations/transitionComponent/TransitionOfComponents";
import { Triangle } from "./snippets/triangle/Triangle";

function App() {
  return (
    <>
      {/* <Triangle />
      <hr></hr>
      <hr></hr> */}
      {/* <TransitionOfComponents /> */}
      {/* <CSSTransitionComponent /> */}
      {/* <TransitionComponent /> */}
      <AnimatingList />
      {/* <FadingBoxComponent /> */}
    </>
  );
}

export default App;
