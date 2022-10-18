import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Header from "./Header";

function PageLayout({ children }) {
  return (
    <Container>
      <Nav />
      <Header />
      <div className="content">{children}</div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    width: calc(100% - 293px);
    position: absolute;
    left: 293px;
    right: auto;
    top: 64px;
    bottom: auto;
    background: #c9d1d1;
  }
`;

export default PageLayout;
