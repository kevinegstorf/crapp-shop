import React from "react";
import { useStore } from "react-redux";

const Test = () => {
  const { products } = useStore().getState();

  return (
    <div>
      {products.payload.map((product: any) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default Test;
