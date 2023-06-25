import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { ColorType, createChart, CrosshairMode } from "lightweight-charts";

const CandleChart = ({ data }) => {
  const chartContainerRef = useRef();
  const chart = useRef();

  useEffect(() => {
    if (data) {
      chart.current = createChart(chartContainerRef.current, {
        height: 435,
        layout: {
          background: { type: ColorType.Solid, color: "#20252B" },
          textColor: "#A7B1BC",
        },
        grid: {
          vertLines: {
            color: "#1c2127",
          },
          horzLines: {
            color: "#1c2127",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: "#636b73",
        },
        timeScale: {
          borderColor: "#636b73",
        },
      });

      const candleSeries = chart.current.addCandlestickSeries({
        upColor: "#4bffb5",
        downColor: "#e96633",
        borderDownColor: "#e96633",
        borderUpColor: "#4bffb5",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
      });

      candleSeries.setData(data);
    }
  }, [data]);

  return (
    <div>
      <div
        ref={chartContainerRef}
        className="chart-container"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

CandleChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CandleChart;
