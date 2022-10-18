import React, { useState } from "react";
import styled from "styled-components";
import Account from "./UserComponents/Account";
import Contributions from "./UserComponents/contributions";

function User() {
  const [component, setComponent] = useState(<Account />);
  return <Container>{component}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default User;
