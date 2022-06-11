import { useState, useEffect } from "react";
import AdditionalInfo from "../AdditionalInfo";
import Description from "../Description";
import Reviews from "../ReviewsTab";
import "./styles.css";

const tabs = {
  0: <Description />,
  1: <AdditionalInfo />,
  2: <Reviews />,
};

const LowerDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  // switch (activeTab) {
  //   case 0:
  //     tabToRender = <Description />;
  //     break;
  //   case 1:
  //     tabToRender = <AdditionalInfo />;
  //   case 2:
  //     tabToRender = <Reviews />;
  //   default:
  //     tabToRender = <Description />;
  // }

  const tabToRender = tabs[activeTab];

  return (
    <div className="lower-details-box">
      <div className="lower-details-title">
        <h2 className="lower-details-header" onClick={() => setActiveTab(0)}>
          Description
        </h2>
        <h2 className="lower-details-header" onClick={() => setActiveTab(1)}>
          Additional Info
        </h2>
        <h2 className="lower-details-header" onClick={() => setActiveTab(2)}>
          Reviews
        </h2>
      </div>
      <div className="tab-text">{tabToRender}</div>
    </div>
  );
};

export default LowerDetails;
