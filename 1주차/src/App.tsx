import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./contents/login";
import SignIn from "./contents/signin";
import View from "./contents/view";
import Write from "./contents/write";
import Check from "./contents/check";
import Rewrite from "./contents/rewrite";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/view" element={<View />} />
        <Route path="/write" element={<Write />} />
        <Route path="/check" element={<Check />} />
        <Route path="/rewrite" element={<Rewrite />} />
      </Routes>
    </>
  );
}

export default App;
