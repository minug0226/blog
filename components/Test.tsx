import React from "react";

interface TestProps {
  text: string;
}

const Test = ({ text }: TestProps) => {
  return (
    <>
      <button onClick={() => console.log("hello")}>Hello</button>
      <h1 className="font-bold">{text}</h1>
    </>
  );
};

export default Test;
