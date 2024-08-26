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


https://teams.microsoft.com/l/channel/19%3Abb173e002e724402b93fbcb850f653ad%40thread.tacv2/Learning?groupId=c97032cc-6e97-4c2d-b771-be84944f20e7&tenantId=e6191525-9bc8-4230-bd08-2a1826f850fe


https://teams.microsoft.com/l/team/19%3AJ5SxwixYFdkZLFtE4gRaj5YPrMK23WaZCLM3vQeWRBM1%40thread.tacv2/conversations?groupId=c97032cc-6e97-4c2d-b771-be84944f20e7&tenantId=e6191525-9bc8-4230-bd08-2a1826f850fe


19%3Abb173e002e724402b93fbcb850f653ad%40thread.tacv2
19%3AJ5SxwixYFdkZLFtE4gRaj5YPrMK23WaZCLM3vQeWRBM1%40thread.tacv2