/* eslint-disable no-lone-blocks */
import React from "react";
import { useGlobalContext } from "./context";

/* components */
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

export interface IApp {}

const App: React.FC<IApp> = (): React.ReactElement => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <div className="continuous-8"></div>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
