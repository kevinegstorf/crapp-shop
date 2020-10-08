import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="header">Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
};

export default Layout;
