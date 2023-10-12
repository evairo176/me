import React from "react";

type Props = {
  height?: number;
  width?: number;
};

const Gap = ({ height, width }: Props) => {
  return <div style={{ height, width }}></div>;
};

export default Gap;
