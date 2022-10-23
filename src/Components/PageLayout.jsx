import React, { useContext, useState, createContext } from "react";
import Box from "@mui/material/Box/Box";
import styled from "styled-components";
import Nav from "./Nav";
import Header from "./Header";

export const NbrContext = createContext(null);

function PageLayout({ children }) {
  const [selected, setSelected] = useState(2);
  return (
    <NbrContext.Provider value={{ selected, setSelected }}>
      <Container>
        <Nav />
        <Header />
        <Box sx={content}>{children}</Box>
      </Container>
    </NbrContext.Provider>
  );
}

const Container = styled.div`
  position: relative;
`;
const content = {
  width: "calc(100% - 293px)",
  position: "absolute",
  left: "293px",
  right: "auto",
  top: "64px",
  bottom: "auto",
  background: "#c9d1d1",
};

export default PageLayout;
