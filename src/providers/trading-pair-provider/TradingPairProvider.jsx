import { useState, createContext, useMemo, useContext } from "react";
import PropTypes from "prop-types";

export const TradingPairProviderContext = createContext({
  setTradingSymbol() {},
  tradingSymbol: "BTCUSDT",
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTradingPairProviderContext = () => {
  if (!TradingPairProviderContext) {
    throw Error(
      "useTradingPairProviderContext can only be used withing an TradingPairProviderContextProvider"
    );
  }
  return useContext(TradingPairProviderContext);
};

export const TradingPairProvider = ({ children }) => {
  const [tradingSymbol, setTradingSymbol] = useState("BTCUSDT");

  const value = useMemo(
    () => ({
      tradingSymbol,
      setTradingSymbol,
    }),
    [tradingSymbol, setTradingSymbol]
  );

  return (
    <TradingPairProviderContext.Provider value={value}>
      {children}
    </TradingPairProviderContext.Provider>
  );
};

TradingPairProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
