import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboards from "../Components/DashboardsUserAdmin";
import PageLayout from "../Components/PageLayout";
import User from "./../Components/User";

const index = () => {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboards />}></Route>
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
