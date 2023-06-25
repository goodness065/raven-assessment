import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetAllTickerPrice = () => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.binance.com/api/v3/ticker/price`
      );
      setData(result.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setData, setError, setLoading]);

  useEffect(() => {
    const getTickerPrice = async () => {
      fetchData();
    };
    getTickerPrice();
  }, [fetchData]);

  return [{ data, loading, error }, fetchData];
};
