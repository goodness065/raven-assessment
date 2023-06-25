import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import { TradingPairProvider } from "./providers/trading-pair-provider/TradingPairProvider";

function App() {
  return (
    <Router>
      <TradingPairProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </TradingPairProvider>
    </Router>
  );
}

export default App;
