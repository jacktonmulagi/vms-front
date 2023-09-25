import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";

const Layout = (
  {
    currentPath,
    allowedPaths
  }
) => {
  console.log(currentPath, allowedPaths);
 

  

  return (
    <div>
      {allowedPaths.includes(currentPath) ? (
        <div>
          <Router />
        </div>
      ) : (
        <div className="layout">
          <Sidebar />
          <div className="main__layout">
            <TopNav />

            <div className="content">
              <Router />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
