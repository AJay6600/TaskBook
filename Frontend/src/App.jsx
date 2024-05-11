import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";
function App() {
  return <><Home/>
    <Routes>
      <Route
        path="/login"
        element={
          <Login/>
        }
      />

      <Route
        path="/signup"
        element={
          <SignUp/>
        }
      />


    </Routes>
  </>;
}

export default App;
