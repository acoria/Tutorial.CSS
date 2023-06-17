import { Paint } from "./miniApps/paint/Paint";
import { PersonSelect } from "./personSelect/PersonSelect";
import { PersonTurn } from "./personSelect/PersonTurn";
import { AnimatingList } from "./reactTutorial/animatingList/AnimatingList";
import { TransitionComponent } from "./reactTutorial/transitions_and_animations/transitionComponent/TransitionComponent";
import { CSSTransitionComponent } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/CSSTransitionComponent";
import { CSSTransitionSidebar } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/sidebar/CSSTransitionSidebar";
import { TransitionOfSidebar } from "./reactTutorial/transitions_and_animations/transitionComponent/sidebar/TransitionOfSidebar";
import { LoadingSpinner } from "./snippets/loadingSpinner/LoadingSpinner";
import { MuiSlider } from "./snippets/muiSlider/MuiSlider";
import { Triangle } from "./snippets/triangle/Triangle";

function App() {
  // return<Triangle />
  // return <Paint />;
  // return <TransitionOfSidebar />;
  // return <CSSTransitionSidebar />
  // return <TransitionComponent />;
  // return <AnimatingList />;
  // return <LoadingSpinner />
  // return <PersonSelect />;
  // return <PersonTurn />;
  return <CSSTransitionComponent />;
}

export default App;
