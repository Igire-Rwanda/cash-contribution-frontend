import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'

const index = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </>
  );
};
export default index;
