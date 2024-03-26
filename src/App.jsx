import { useRef, useState } from "react";
import "./App.css";
import Family from "./componentsPropDrilling/Family";
import { FamilyContext } from "./componentsPropDrilling/FamilyContext";
import Parent from "./compoUseCallBackHook/Parent";
import Counter from "./compoUseMemoHook/Counter";

function App() {
  const [message, setMessage] = useState("invincibles");
  const [name, setName] = useState("Steve");

  const refElement = useRef("");
  console.log(refElement);

  const clear = () => {
    setName("");
    refElement.current.focus();
  };

  const changeColor = () => {
    refElement.current.style.color = "red";
  };

  return (
    <>
      {/* Context API Example */}
      {/* <FamilyContext.Provider value={message}>
        <Family />
      </FamilyContext.Provider> */}

      {/* useCallBack Hooks Example */}
      {/* <Parent /> */}

      {/* useMemo Hook Example */}
      {/* <Counter /> */}

      {/* useRef Hook Example */}
      <h1>useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={clear}>Clear</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default App;
