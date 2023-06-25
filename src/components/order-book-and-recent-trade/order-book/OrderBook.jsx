import { useState } from "react";
import { Select } from "antd";

import { numbersOption } from "../../../utils/data.utils";

//style
import "./style/orderBook.css";

//icons
import icon1 from "../../../assets/icons/order1.svg";
import icon2 from "../../../assets/icons/order2.svg";
import icon3 from "../../../assets/icons/order3.svg";
import SingleOrderBook from "./order-book-single/SingleOrderBook";

const OrderBook = () => {
  const sections = [
    <img src={icon1} alt="" key={1} />,
    <img src={icon2} alt="" key={2} />,
    <img src={icon3} alt="" key={3} />,
  ];
  const [activeSection, setActiveSection] = useState(0);

  const changeActiveSection = (index) => {
    setActiveSection(index);
  };

  return (
    <section className="order-book-main-card">
      <div className="order-book-main-card__nav">
        <div className="order-book-main-card__nav__icon-list">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => changeActiveSection(index)}
              className={`order-book-main-card__nav__item ${
                activeSection === index
                  ? "order-book-main-card__nav__item--active"
                  : ""
              }`}
            >
              <p>{section}</p>
            </div>
          ))}
        </div>
        <div>
          <Select
            defaultValue="10"
            popupClassName="dropdown-input-container__select-dropdown order-book-main-card__select-dropdown--width"
            options={numbersOption}
          />
        </div>
      </div>
      <div className="profile-info-con">
        {activeSection === 0 ? (
          <SingleOrderBook />
        ) : activeSection === 1 ? (
          <SingleOrderBook />
        ) : (
          <SingleOrderBook />
        )}
      </div>
    </section>
  );
};

export default OrderBook;
