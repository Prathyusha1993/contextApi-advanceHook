import React from "react";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

const GrandSon = () => {
  const testMessage = useContext(FamilyContext);
  return (
    <div className="gson">
      <h3>GrandSon {testMessage}</h3>
    </div>
  );
};

export default GrandSon;
