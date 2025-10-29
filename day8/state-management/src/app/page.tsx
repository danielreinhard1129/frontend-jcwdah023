"use client";

import { createContext, useContext } from "react";

interface ProductContextType {
  product: string;
}

export const ProductContext = createContext<ProductContextType | null>(null);

const Home = () => {
  const product = "sepatu adidas";

  return (
    <ProductContext.Provider value={{ product: product }}>
      <div className="max-w-2xl mx-auto">
        <h1>Home</h1>
        <ComponentA />
      </div>
    </ProductContext.Provider>
  );
};

export default Home;

const ComponentA = () => {
  return (
    <div className="border border-orange-500 p-4">
      <h1>ComponentA</h1>
      <ComponentB />
    </div>
  );
};

const ComponentB = () => {
  return (
    <div className="border border-green-500 p-4">
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
};

const ComponentC = () => {
  const context = useContext(ProductContext);

  return (
    <div className="border border-red-500 p-4">
      <h1>ComponentC - {context?.product}</h1>
    </div>
  );
};
