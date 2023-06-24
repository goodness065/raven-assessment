/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import { useGetBinanceTradingPairs } from "../../hooks/useGetBinanceTradingPairs";
//icons
import info from "../../assets/icons/info.svg";
import chart from "../../assets/icons/chart.svg";
import search from "../../assets/icons/Search.svg";

//styles
import "./style/trading-header.css";

const TradingHeader = () => {
  const sections = ["All", "USD", "BTC"];
  const [activeSection, setActiveSection] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [pair1, setPair1] = useState("BTC");
  const [pair2, setPair2] = useState("USDT");
  const [filteredPairs, setFilteredPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState(null);
  const [openSelectMarketDropdown, setOpenSelectMarketDropdown] =
    useState(false);

  const [{ data }] = useGetBinanceTradingPairs();

  useEffect(() => {
    if (searchTerm) {
      setActiveSection(0);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (activeSection !== 0) {
      const value = sections[activeSection];
      setFilteredPairs(
        data?.filter((pair) =>
          pair.symbol.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredPairs(
        data?.filter((pair) =>
          pair.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, activeSection, data]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectPair = (pair) => {
    setSelectedPair(pair);
  };

  const changeActiveSection = (index) => {
    setActiveSection(index);
  };

  return (
    <section className="trading-header-container">
      <div className="trading-header-container__main">
        <div
          className="trading-header-container__trading-pair-title-container"
          onClick={() => setOpenSelectMarketDropdown(!openSelectMarketDropdown)}
        >
          <h1>
            {pair1}/{pair2}
          </h1>
          <MdKeyboardArrowDown className="trading-header-container__arrow-down" />
        </div>
        <div>
          <h3>$20,645</h3>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <img src={info} alt="" />
            <p>24h change</p>
          </div>
          <h4>$20,645</h4>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <AiOutlineArrowUp
              style={{
                color: "#A7B1BC",
              }}
            />
            <p>24h high</p>
          </div>
          <h2>$20,645</h2>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <AiOutlineArrowDown
              style={{
                color: "#A7B1BC",
              }}
            />
            <p>24h high</p>
          </div>
          <h2>$20,645</h2>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <img src={chart} alt="" />
            <p>24h high</p>
          </div>
          <h2>$20,645</h2>
        </div>
      </div>
      {openSelectMarketDropdown && (
        <div className="trading-header-container__search-main-container">
          <h2>Select Market</h2>
          <div className="trading-header-container__search-main-container__input-container">
            <img src={search} alt="" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
          <div className="trading-header-container__search-main-container__nav">
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
          </div>
          {filteredPairs?.length === 0 ? (
            <div className="trading-header-container__search-main-container__no-data">
              <p>No data</p>
            </div>
          ) : (
            <ul>
              {filteredPairs?.map((pair) => (
                <li key={pair.symbol} onClick={() => handleSelectPair(pair)}>

                  <p>
                    {pair.baseAsset} - {pair.quoteAsset}
                  </p>
                  <p>
                    ${parseFloat(pair.filters[0].maxPrice).toFixed(2)}
                  </p>
                  <p className="trading-header-container__search-main-container__percentage">+{pair.filters[5].avgPriceMins}%</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {selectedPair && (
        <div>
          <h2>{selectedPair.symbol}</h2>
          {/* Display logo, price, increase rate, and other details */}
        </div>
      )}
    </section>
  );
};

export default TradingHeader;
