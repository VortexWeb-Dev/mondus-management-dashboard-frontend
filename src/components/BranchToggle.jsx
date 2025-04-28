import React from "react";
import { useBranch } from "../context/BranchContext";

const BranchToggle = () => {
  const { branch, toggleBranch } = useBranch();

  return (
    <button
      onClick={toggleBranch}
      className={`relative w-36 h-10 rounded-full p-0.5 transition-all duration-500 ease-in-out ${
        branch === "Mondus" ? "bg-green-400" : "bg-purple-400"
      } cursor-pointer`}
      aria-label={`Switch branch to ${branch === "Mondus" ? "CFT" : "Mondus"}`}
    >
      <div
        className={`absolute top-0.5 w-18 h-9 rounded-full flex items-center justify-center shadow-md transform transition-all duration-500 ${
          branch === "Mondus"
            ? "bg-green-600 translate-x-0 shadow-green-500/30"
            : "bg-purple-600 translate-x-18 shadow-purple-500/30"
        }`}
      >
        <span className="text-white text-sm font-semibold">
          {branch === "Mondus" ? "Mondus" : "CFT"}
        </span>
      </div>
    </button>
  );
};

export default BranchToggle;
