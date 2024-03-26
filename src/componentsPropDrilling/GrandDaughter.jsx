import React from "react";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

const GrandDaughter = () => {
  const testMessage = useContext(FamilyContext);
  return (
    <div className="gdaughter">
      <h3>GrandDaughter {testMessage}</h3>
    </div>
  );
};

export default GrandDaughter;
