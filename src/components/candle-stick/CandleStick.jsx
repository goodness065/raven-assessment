import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrRedo, GrUndo } from "react-icons/gr";
import { FaExpandAlt } from "react-icons/fa";

import CandleChart from "./chart/CandleChart";
import { useGetCandleStickData } from "../../hooks/useGetCandleStickData";

//style
import "./style/candle-stick.css";

//icon
import chartIcon from "../../assets/icons/candlechart.svg";
import { useTradingPairProviderContext } from "../../providers/trading-pair-provider/TradingPairProvider";

const CandleStick = () => {
  const { tradingSymbol } = useTradingPairProviderContext();

  console.log("symbol", tradingSymbol);

  const sections = ["1h", "2h", "4h", "1w", "1m"];

  const [activeSection, setActiveSection] = useState(0);

  const [{ data: candelData, loading }, fetchData] =
    useGetCandleStickData("1h", tradingSymbol);

  const changeActiveSection = async (index) => {
    setActiveSection(index);
    await fetchData(sections[index], tradingSymbol);
  };

  if (loading) {
    // change this
    return <div>Loading</div>;
  }

  return (
    <div className="candle-chart-container">
      <div>
        <div className="candle-chart-container__nav">
          <div className="candle-chart-container__nav__nav-list">
            <p>Time</p>
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
            <div>
              <MdKeyboardArrowDown className="candle-chart-container__nav__nav-list__arrow" />
            </div>
            <div className="candle-chart-container__nav__nav-list__img-container">
              <img src={chartIcon} />
            </div>
            <div className="candle-chart-container__nav__nav-list__fx-container">
              <p className="">Fx Indicators</p>
            </div>
            <div className="candle-chart-container__nav__nav-list__undo-container">
              <GrUndo className="candle-chart-container__nav__nav-list__undo" />
              <GrRedo className="candle-chart-container__nav__nav-list__undo" />
            </div>
          </div>
          <div>
            <FaExpandAlt className="candle-chart-container__nav__nav-list__expand" />
          </div>
        </div>
      </div>
      {candelData?.length > 0 ? (
        <CandleChart data={candelData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CandleStick;
