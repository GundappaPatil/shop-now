import "./styles.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import ProtectedRoute from "./containers/ProtectedRoute";
import { UserAuthContextProvider } from './context/UserAuthContext';

export default function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path="/Header" element={<ProtectedRoute><Header /></ProtectedRoute> } />
          <Route path="/product/:productId" element={<ProductDetail />} />
          {/* <Route>404 Not Found!</Route> */}
        </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}