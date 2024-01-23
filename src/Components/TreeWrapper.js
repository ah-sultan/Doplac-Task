"use client";
import { useState } from "react";
import treeData from "../data.json";

const TreeWrapper = () => {
  const [data, setData] = useState(treeData);
  return (
    <>
      <div className="mx-auto w-full wrapper bg-[#FBFDFF]  rounded-xl rounded-b-none py-[100px]">
        {data.map((item) => {
          return (
            <div>
              
            </div>
          )
        })}
      </div>
    </>
  );
};

export default TreeWrapper;
