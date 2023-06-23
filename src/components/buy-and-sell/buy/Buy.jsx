import { useState } from "react";

import TextInput from "../../input/TextInput";

// style
import "./style/buy.css";

const Buy = () => {
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
      <div className="profile-info-con">
        {activeSection === 0 ? (
          <div>
            <TextInput />
          </div>
        ) : activeSection === 1 ? (
          <div></div>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </section>
  );
};

export default Buy;
