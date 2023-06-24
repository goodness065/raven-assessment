import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetBinanceTradingPairs = () => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://api.binance.com/api/v3/exchangeInfo"
      );
      setData(result.data.symbols);
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
