import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import OrderPage from "./components/pages/OrderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Orderpage/:user" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
