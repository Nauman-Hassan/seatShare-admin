import { RotateSpinner } from "react-spinners-kit";

import React from "react";

// use SIZE and COLOR props for change in size and color

export default function DashboardLoader({ size, color }) {
  

  return (
    <div style={{paddingTop:"1%", paddingLeft:"1%"}}>
      <RotateSpinner color={color} size={size} />
    </div>
  );
}
