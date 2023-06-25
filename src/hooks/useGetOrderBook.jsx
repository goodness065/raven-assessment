import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetOrderBook = (symbol) => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=5`
      );
      setData(result.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setData, setError, setLoading, symbol]);

  useEffect(() => {
    const getOrderBook = async () => {
      fetchData();
    };
    getOrderBook();
  }, [fetchData]);

  return [{ data, loading, error }, fetchData];
};
