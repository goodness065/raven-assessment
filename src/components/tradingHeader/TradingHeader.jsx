import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { NumericFormat } from "react-number-format";

import { useGetBinanceTradingPairs } from "../../hooks/useGetBinanceTradingPairs";
import { getPercentage } from "../../helpers/getPercentage";
import { useGetAllTickerPrice } from "../../hooks/useGetAllTickerPrice";
import { useGetTicker24HrsData } from "../../hooks/useGetTicker24HrsData";
import { useGetIndividualTickerPrice } from "../../hooks/useGetIndividualTickerPrice";
import { useTradingPairProviderContext } from "../../providers/trading-pair-provider/TradingPairProvider";

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
  const { tradingSymbol, setTradingSymbol } = useTradingPairProviderContext();

  const [pair1, setPair1] = useState("BTC");
  const [pair2, setPair2] = useState("USDT");
  const [filteredPairs, setFilteredPairs] = useState([]);
  const [openSelectMarketDropdown, setOpenSelectMarketDropdown] =
    useState(false);

  const [{ data }] = useGetBinanceTradingPairs();
  const [{ data: tickerData }] = useGetTicker24HrsData(tradingSymbol);
  const [{ data: tickerPriceData }] = useGetAllTickerPrice();
  const [{ data: individualTickerPriceData }] =
    useGetIndividualTickerPrice(tradingSymbol);

  useEffect(() => {
    if (searchTerm) {
      setActiveSection(0);
    }
  }, [searchTerm]);

  const combinedTradingPairWithPrice = data?.map((dataObj) => {
    const matchArray = tickerPriceData?.find(
      (tickerPriceDataObj) => tickerPriceDataObj.symbol === dataObj.symbol
    );
    return { ...dataObj, ...matchArray };
  });

  useEffect(() => {
    if (activeSection !== 0) {
      const value = sections[activeSection];
      setFilteredPairs(
        combinedTradingPairWithPrice?.filter((pair) =>
          pair.symbol.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredPairs(
        combinedTradingPairWithPrice?.filter((pair) =>
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
    setPair1(pair.baseAsset);
    setPair2(pair.quoteAsset);
    setTradingSymbol(pair.symbol);
    setOpenSelectMarketDropdown(!openSelectMarketDropdown);
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
          <h3>
            $
            <NumericFormat
              value={parseFloat(individualTickerPriceData?.price).toFixed(3)}
              displayType="text"
              thousandSeparator=","
            />
          </h3>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <img src={info} alt="" />
            <p>24h change</p>
          </div>
          {Math.sign(tickerData?.priceChangePercent) ? (
            <h4 style={{ color: "red" }}>{tickerData?.priceChangePercent}%</h4>
          ) : (
            <h4>{tickerData?.priceChangePercent}%</h4>
          )}
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
          <h2>
            {parseFloat(
              getPercentage(tickerData?.openPrice, tickerData?.highPrice)
            ).toFixed(2)}
            %
          </h2>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <AiOutlineArrowDown
              style={{
                color: "#A7B1BC",
              }}
            />
            <p>24h low</p>
          </div>
          <h2>
            {parseFloat(
              getPercentage(tickerData?.openPrice, tickerData?.lowPrice)
            ).toFixed(2)}
            %
          </h2>
        </div>
        <div className="trading-header-container__24hrs-container">
          <div>
            <img src={chart} alt="" />
            <p>24h volume</p>
          </div>
          <h2>{parseFloat(tickerData?.volume).toFixed(2)}</h2>
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
                    $
                    <NumericFormat
                      value={parseFloat(pair.price).toFixed(4)}
                      displayType="text"
                      thousandSeparator=","
                    />
                  </p>
                  <p className="trading-header-container__search-main-container__percentage">
                    +{pair.filters[5].avgPriceMins}%
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};

export default TradingHeader;
