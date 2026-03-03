"use client";
import React, { memo } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="h-full w-full ">
      <InlineWidget
        url="https://calendly.com/mubashirfreston/30min"
        styles={{
          height: "800px",
          minHeight: "800px",
          minWidth: "320px",
          width: "100%",
        }}
      />
    </div>
  );
};
export default memo(CalendlyWidget);
