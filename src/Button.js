import React from "react";
export const RenderButton = (props) => {
  return <button onChange={props.handleClick("Yes")}>Click</button>;
};
