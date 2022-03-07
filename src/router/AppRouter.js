import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "../components/Navbar";
import AddCat from "../components/AddCat";
import EditCat from "../components/EditCat";
import Home from "../components/Home";

const AppRouter = () => {
  const [cats, setCats] = useLocalStorage("cats", []);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home cats={cats} setCats={setCats} />}
              exact="true"
            ></Route>
            <Route
              path="/add"
              element={<AddCat animate={true} cats={cats} setCats={setCats} />}
            />
            <Route
              element={<EditCat cats={cats} setCats={setCats} />}
              path="/edit/:id"
            />
            <Route element={() => <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
