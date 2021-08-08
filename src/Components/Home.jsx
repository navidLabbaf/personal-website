import React from "react";
import PageSm from "./PageSm";
import PageLg from "./PageLg";

function Home() {
  return (
    <React.Fragment>
      <div className="d-none d-sm-block">
      <PageLg />
      </div>
      <div className="d-block d-sm-none">
        <PageSm />
      </div>
    </React.Fragment>
  );
}

export default Home;