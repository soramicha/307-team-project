import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
