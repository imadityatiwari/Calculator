import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      let result = eval(calValue);
      setCalValue(result);
    } else {
      let exp = calValue + buttonText;
      setCalValue(exp);
    }
  };

  return (
    <>
      <center>
        <h2>CALCULATOR</h2>
        <div className={styles.container}>
          <Display displayValue={calValue}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </center>
    </>
  );
}

export default App;
