import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import { SwitchThemeContext } from "./context/SwitchTheme";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  const { isDarkTheme } = useContext(SwitchThemeContext);

  return (
    <>
      <div className={`app-container ${isDarkTheme ? "dark-theme" : ""}`}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sign-up"
              element={!user ? <SignUp /> : <Navigate to={"/"} />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/favourites"
              element={user ? <Favourites /> : <Navigate to={"/login"} />}
            />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
