import { Paint } from "./miniApps/paint/Paint";
import { PersonSelect } from "./miniApps/personImage/personSelect/PersonSelect";
import { AnimatingList } from "./reactTutorial/animatingList/AnimatingList";
import { TransitionComponent } from "./reactTutorial/transitions_and_animations/transitionComponent/TransitionComponent";
import { CSSTransitionComponent } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/CSSTransitionComponent";
import { CSSTransitionSidebar } from "./reactTutorial/transitions_and_animations/cssTransitionComponent/sidebar/CSSTransitionSidebar";
import { TransitionOfSidebar } from "./reactTutorial/transitions_and_animations/transitionComponent/sidebar/TransitionOfSidebar";
import { LoadingSpinner } from "./snippets/loadingSpinner/LoadingSpinner";
import { MuiSlider } from "./snippets/muiSlider/MuiSlider";
import { Triangle } from "./snippets/triangle/Triangle";
import { Test } from "./test/Test";
import { BerryGreen } from "./colorPalettes/berryGreen/BerryGreen";
import { TurningPerson } from "./miniApps/personImage/personTurn/person/TurningPerson";

function App() {
  // return<Triangle />
  // return <Paint />;
  // return <TransitionOfSidebar />;
  // return <CSSTransitionSidebar />
  // return <TransitionComponent />;
  // return <AnimatingList />;
  // return <LoadingSpinner />
  // return <PersonSelect />;
  return <TurningPerson />;
  // return <CSSTransitionComponent />;
  // return <Test />;
  // return <BerryGreen />;
}

export default App;
