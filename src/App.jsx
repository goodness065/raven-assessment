import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import { TradingPairProvider } from "./providers/trading-pair-provider/TradingPairProvider";
import Login from "./screens/Login/Login";
import { AuthProvider } from "./providers/auth-provider/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <TradingPairProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/exchange" element={<Home />}></Route>
          </Routes>
        </TradingPairProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
