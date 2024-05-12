import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/common/Navbar";
import Main from "./pages/Main"
import { useAuthContext } from "./hook/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Main /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        <Route
          path="/main"
          element={
            <Main/>
          }
        />

        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
