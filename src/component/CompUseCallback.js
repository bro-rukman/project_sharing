import React from "react";

const CompUseCallback = ({ action }) => {
  console.log("renderss");
  return (
    <>
      <h4>CompUseCallback</h4>
      <div>
        <button onClick={action}>setCountUsecallback</button>
      </div>
    </>
  );
};
export default React.memo(CompUseCallback, (prev, next) => {
  return prev === next;
});
// export default CompUseCallback;
