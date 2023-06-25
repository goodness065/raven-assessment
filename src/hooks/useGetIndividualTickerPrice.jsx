import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetIndividualTickerPrice = (symbol) => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
      );
      setData(result.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setData, setError, setLoading, symbol]);

  useEffect(() => {
    const getTickerPrice = async () => {
      fetchData();
    };
    getTickerPrice();
  }, [fetchData]);

  return [{ data, loading, error }, fetchData];
};
