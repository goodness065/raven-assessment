import { AiOutlineArrowUp } from "react-icons/ai";
import { useGetOrderBook } from "../../../../hooks/useGetOrderBook";
import { useGetTicker24HrsData } from "../../../../hooks/useGetTicker24HrsData";
import { useTradingPairProviderContext } from "../../../../providers/trading-pair-provider/TradingPairProvider";
import "./style/single-order-book.css";

const TradingPairList = () => {
  const { tradingSymbol } = useTradingPairProviderContext();
  const [{ data }] = useGetOrderBook(tradingSymbol);
  const [{ data: tickerData }] = useGetTicker24HrsData(tradingSymbol);

  return (
    <div className="single-order-book-container">
      <div className="single-order-book-container__nav">
        <div>
          <p>Price</p>
          <p>(USDT)</p>
        </div>
        <div className="single-order-book-container__nav__right">
          <p>Amounts</p>
          <p>(BTC)</p>
        </div>
        <div className="single-order-book-container__nav__right">
          <p>Total</p>
        </div>
      </div>
      {data?.asks?.map((item, index) => (
        <div key={index} className="single-order-book-container__main">
          <div>
            <p className="single-order-book-container__main--colored">
              {parseFloat(item[0]).toFixed(2)}
            </p>
          </div>
          <div className="single-order-book-container__nav__right">
            <p>{parseFloat(item[1]).toFixed(2)}</p>
          </div>
          <div className="single-order-book-container__nav__right">
            <p>{parseFloat(+item[1] * +item[0]).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div className="single-order-book-container__main__rating">
        <div>
          <p className="single-order-book-container__main--green">{parseFloat(tickerData?.highPrice).toFixed(2)}</p>
          <div>
            <AiOutlineArrowUp className="single-order-book-container__main--green arrow-up" />
          </div>
          <p>{parseFloat(tickerData?.lowPrice).toFixed(2)}</p>
        </div>
      </div>
      {data?.bids?.map((item, index) => (
        <div key={index} className="single-order-book-container__main">
          <div>
            <p className="single-order-book-container__main--green">
              {parseFloat(item[0]).toFixed(2)}
            </p>
          </div>
          <div className="single-order-book-container__nav__right">
            <p>{parseFloat(item[1]).toFixed(2)}</p>
          </div>
          <div className="single-order-book-container__nav__right">
            <p>{parseFloat(+item[1] * +item[0]).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradingPairList;
