import React, { createContext, useContext, useEffect, useState } from "react";

const BranchContext = createContext();

export const useBranch = () => useContext(BranchContext);

export const BranchProvider = ({ children }) => {
  const [branch, setBranch] = useState("Mondus");

  useEffect(() => {
    const storedBranch = localStorage.getItem("branch");
    if (storedBranch) {
      setBranch(storedBranch);
    }
  }, []);

  const toggleBranch = () => {
    const newBranch = branch === "Mondus" ? "CFT" : "Mondus";
    setBranch(newBranch);
    localStorage.setItem("branch", newBranch);
  };

  return (
    <BranchContext.Provider value={{ branch, toggleBranch }}>
      {children}
    </BranchContext.Provider>
  );
};
