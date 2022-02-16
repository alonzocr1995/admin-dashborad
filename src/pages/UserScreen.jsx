import React from "react";
import styled from "styled-components";
import User from "../components/User/User";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const UserScreen = () => {
  return (
    <Container>
      <User />
    </Container>
  );
};

export default UserScreen;
