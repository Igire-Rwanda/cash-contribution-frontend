import React, { useContext } from "react";
import styled from "styled-components";
import { NbrContext } from "./PageLayout";
import Account from "./UserComponents/Account";
import Contributions from "./UserComponents/contributions";
import Transactions from "./UserComponents/Transactions";

function User() {
  const { selected } = useContext(NbrContext);
  return (
    <Container>
      {selected == 2 && <Account />}
      {selected == 4 && <Contributions />}
      {selected == 3 && <Transactions />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default User;
