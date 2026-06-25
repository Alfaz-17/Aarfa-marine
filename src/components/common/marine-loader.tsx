import React from "react";

export const MarineLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-secondary">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-secondary-light/20 border-t-accent rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-secondary-light">Syncing systems...</p>
      </div>
    </div>
  );
};
