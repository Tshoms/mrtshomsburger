import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Orderpage/:user" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
