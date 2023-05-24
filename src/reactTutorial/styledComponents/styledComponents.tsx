/* Styled components are a possibility to style elements by turning them/wrapping them into a styled component and adding styles to this component.
   This ensures that the css is scoped to this element only and does not spill over to other elements.
   Downsides: 
    - it needs an extra library (css modules are supported by default)
    - it needs an extra extension in VSCode (vscode-styled-components) so that the syntax highlighting and code completion works
    - it mixes typescript and css

    - an element can be turned into a styled component by wrapping it in styled.div``
    - for elements and classes inside, an ampersand is used
    - properties can be passed
    - media queries can be used

*/

import { styled } from "styled-components";

const Input = styled.div`
  margin-top: 0.5rem;

  //elements inside the div can be addressed by using the ampersand for the div
  & label {
    color: green;
  }

  //classes inside the div can be addressed by using the ampersand for the div
  & .inputField {
    background-color: gray;
  }

  //media queries can simply be added here
  @media (min-width: 768px) {
    width: auto;
  }
`;

const StyledComponentExample = () => {
  return (
    <>
      {/* this div is replaced.. */}
      <div>
        <label>Name</label>
        <input className="inputField" />
      </div>

      {/* ..with the styled component defined above */}
      <Input>
        <label>Name</label>
        <input className="inputField" />
      </Input>
    </>
  );
};


/*  Properties example */
interface Props {
  invalid: boolean;
}

const InputWithProps = styled.div<Props>`
  & .inputField {
    background-color: ${(props) => (props.invalid ? "red" : "gray")};
  }
`;

const PropertiesExample = () => {
  return (
    <>
      {/* an example with dynamic props */}
      <InputWithProps invalid={true}>
        <label>Name</label>
        <input className="inputField" />
      </InputWithProps>
    </>
  );
};

function App() {
  return (
    <>
      <StyledComponentExample />
      <PropertiesExample />
    </>
  );
}

export default App;
