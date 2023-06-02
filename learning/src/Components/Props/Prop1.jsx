import React from "react";
import Prop1a from "./Prop1a";
import { PropsData } from "./PropData";
// console.log(PropsData[0]);

const Prop1 = () => {
  return (
    <>
      {/* now for multiple cards we can use .map method for repetation of dame kind of data */}

      {PropsData.map((val, ind) => {
        console.log(val);
        console.log(ind);
        return (
          <Prop1a
            key={val.ind}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default Prop1;
