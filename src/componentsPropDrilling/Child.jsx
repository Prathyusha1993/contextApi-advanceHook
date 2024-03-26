import React from "react";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

const Child = () => {
  const testMessage = useContext(FamilyContext);
  return (
    <div className="children">
      <h1>Child {testMessage}</h1>
      <GrandDaughter />
      <GrandSon />
    </div>
  );
};

export default Child;
