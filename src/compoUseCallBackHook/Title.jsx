import React from "react";

const Title = () => {
  console.log("rendering title");
  return (
    <div>
      <h2>UseCallBack Hook</h2>
    </div>
  );
};

export default React.memo(Title);
