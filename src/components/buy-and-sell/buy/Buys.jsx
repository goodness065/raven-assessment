import { useState } from "react";

import Limit from "./limit/Limit";
import Market from "./market/Market";

// style
import "./style/buy.css";
import StopLimit from "./stop-limit/StopLimit";

const Buys = () => {
  const sections = ["Limit", "Market", "Stop-Limit"];
  const [activeSection, setActiveSection] = useState(0);

  const changeActiveSection = (index) => {
    setActiveSection(index);
  };

  return (
    <section className="buy-card">
      <div className="buy-card__nav">
        {sections.map((section, index) => (
          <div
            key={index}
            onClick={() => changeActiveSection(index)}
            className={`buy-card__nav__item ${
              activeSection === index ? "buy-card__nav__item--active" : ""
            }`}
          >
            <p>{section}</p>
          </div>
        ))}
      </div>
      <div>
        {activeSection === 0 ? (
          <Limit />
        ) : activeSection === 1 ? (
          <Market />
        ) : (
          <StopLimit />
        )}
      </div>
    </section>
  );
};

export default Buys;
