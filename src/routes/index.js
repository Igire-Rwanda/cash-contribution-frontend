import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Components/signin";
import Signup from "../Components/signup"
import PageLayout from "../Components/PageLayout";
import User from "../Components/User";

const index = () => {
  return (
    <>
      <Routes>
        <Route exact path="/signin" element={<Signin />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>


        <Route
          exact
          path="/user"
          element={
            <PageLayout>
              <User />
            </PageLayout>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default index;
