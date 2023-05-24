/* CSS Modules scope the included classes to the elements inside the file they are imported into.
    
    CSS Modules are supported by react per default (can be found in the official docs). There is no extra library needed.

    Styles do not spill over to other components:
        Whenever a css module file is imported, unique classnames for each class included inside the module file are created.
        e.g. for
            .title {
                background-color: blueviolet;
                color: white;
            }
            a unique classname with <Module-filename>_<classname>__<uniqueId> is generated:
                .modulesExample_title__-utL2 {
                    background-color: blueviolet;
                    color: white;
                }
    
    - Modules can be used by creating a css file with <randomNameOfCssComponent>.module.css
        e.g.
            Homepage.module.css
        They need importing into the component:
            e.g.
                import styles from './Homepage.module.css'
        Then any class can be added to an element via className.
    
    - For kebab-case class identifiers, the name needs to be put as a string:
        e.g.
            ${styles['some-kebab-case-class']
*/

import { useState } from "react";
import styles from "./cssModules.module.css";

export const ModulesExample: React.FC = () => {
  const [isValid, setIsValid] = useState(true);

  return (
      <div
        className={`${styles.title} ${isValid ? "" : styles.invalid}`}
        onClick={() => setIsValid((previous) => !previous)}
      >
        Test
      </div>
  );
};
