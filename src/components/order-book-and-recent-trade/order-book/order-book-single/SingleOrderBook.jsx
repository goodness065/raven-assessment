import { useEffect, useState } from "react";
import axios from "axios";

const TradingPairList = () => {
  const [pairs, setPairs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTradingPairs = async () => {
      try {
        const response = await axios.get(
          // "https://api.exchange.coinbase.com/products"
          "https://api.binance.com/api/v3/exchangeInfo"
        );
        setPairs(response.data.symbols);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTradingPairs();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPairs = pairs?.filter((pair) =>
    pair.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(pairs);

  // const symbols = [
  //   {
  //     ba: "ETH",
  //     qa: "BTC",
  //   },
  //   {
  //     ba: "Ada",
  //     qa: "usd",
  //   },
  //   {
  //     ba: "dog",
  //     qa: "Ada",
  //   },
  //   {
  //     ba: "BTC",
  //     qa: "BTC",
  //   },
  // ];

  // const coins = [
  //   {
  //     symbol: "ETH",
  //   },
  //   {
  //     symbol: "dog",
  //   },
  // ];

  // const currency = [
  //   {
  //     symbol: "BTC",
  //   },
  //   {
  //     symbol: "usd",
  //   },
  // ];

  // const filteredSymbols = symbols.filter((symbol) => {
  //   const foundBa = coins.some((coin) => coin.symbol === symbol.ba);
  //   const foundQa = currency.some((cur) => cur.symbol === symbol.qa);
  //   return foundBa && foundQa;
  // });

  // console.log(filteredSymbols);

  //   var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };

  // fetch("https://api.exchange.coinbase.com/products", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search pairs"
      />
      {filteredPairs.map((pair) => (
        <div key={pair.symbol}>
          {/* <img
            src={`https://assets.coingecko.com/coins/images/279/large/${pair.baseAsset}.png`}
            alt={pair.symbol}
          /> */}
          <span>{pair.symbol}</span>
          <span>{pair.baseAsset}</span>
          <span>{pair.quoteAsset}</span>
          {/* Display other details as needed */}
        </div>
      ))}
    </>
  );
};

export default TradingPairList;
