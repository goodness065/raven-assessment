import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetBinanceTradingPairs = () => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result1 = await axios.get(
        "https://api.binance.com/api/v3/exchangeInfo"
      );
      const result2 = await axios.get(
        `https://api.binance.com/api/v3/ticker/price`
      );
      const combinedTradingPairWithPrice = result1?.data?.symbols?.map((dataObj) => {
        const matchArray = result2?.data?.find(
          (tickerPriceDataObj) => tickerPriceDataObj.symbol === dataObj.symbol
        );
        return { ...dataObj, ...matchArray };
      })
      setData(combinedTradingPairWithPrice);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setData, setError, setLoading]);

  useEffect(() => {
    const getBinanceTradingPairs = async () => {
      fetchData();
    };
    getBinanceTradingPairs();
  }, [fetchData]);

  return [{ data, loading, error }, fetchData];
};
