import { Accordion } from "./Accordion";

export const AccordionWrapper: React.FC = () => {
  return (
    <Accordion titles={["First", "Second", "Third"]}>
      <div>First content</div>
      <div>
        Second content..much
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
      </div>
      <div>
        Third content..a little
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
      </div>
    </Accordion>
  );
};
