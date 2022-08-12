import React from "react";

const PageTitleComponent = ({ pageTitle }) => {
  return (
    <div className="w-full mb-6 pt-3">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="text-xs font-light text-gray-500 uppercase">Overview</div>
          <div className="text-xl font-bold">{pageTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default PageTitleComponent;
