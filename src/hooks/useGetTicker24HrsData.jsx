import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetTicker24HrsData = (symbol) => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
      );
      setData(result.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setData, setError, setLoading, symbol]);

  useEffect(() => {
    const getTicker24HrsData = async () => {
      fetchData();
    };
    getTicker24HrsData();
  }, [fetchData]);

  return [{ data, loading, error }, fetchData];
};
