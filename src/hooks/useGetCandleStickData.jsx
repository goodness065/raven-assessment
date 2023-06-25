import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetCandleStickData = (interval, symbol) => {
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (interval,symbol) => {
    setLoading(true);
    try {
      const result = await axios.get(
        'https://api.binance.com/api/v3/klines',
          {
            params: {
              symbol: symbol, // Replace with the symbol you want
              interval: interval, // Replace with the desired interval
              limit: 100, // Replace with the number of data points you want
            },
          }
      );
      const cdata = result.data.map(d => {
        return {time:d[0] / 1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
      })
      setData(cdata);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setData, setError, setLoading]);

  useEffect(() => {
    const getCandleStickData = async () => {
      fetchData(interval,symbol);
    };
    getCandleStickData();
  }, [fetchData, interval,symbol]);

  return [{ data, loading, error }, fetchData];
};
