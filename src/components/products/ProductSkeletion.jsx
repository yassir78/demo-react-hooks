import React from "react";
import Skeleton from "../shared/Skeleton";

const ProductSkeletion = () => {
  return (
    <div className="flex justify-between w-full mt-5">
      {Array.from(Array(3), (e, i) => {
        return <Skeleton></Skeleton>;
      })}
    </div>
  );
};

export default ProductSkeletion;
