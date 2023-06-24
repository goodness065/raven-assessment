export const getTradingPairs = (btradingPair, supportedCoins, supportedCurrencies) => {
  const filteredSymbols = btradingPair.filter((pairs) => {
    const foundBa = supportedCoins.some((coin) => coin.symbol === pairs.baseAsset);
    const foundQa = supportedCurrencies.includes(pairs.quoteAsset.toLowerCase());
    return foundBa && foundQa;
  });

  return filteredSymbols;
};