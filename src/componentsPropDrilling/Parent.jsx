import React from "react";
import Child from "./Child";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

const Parent = () => {
  const testMessage = useContext(FamilyContext);
  return (
    <div className="parent">
      <h1>Parent {testMessage}</h1>
      <Child />
    </div>
  );
};

export default Parent;
