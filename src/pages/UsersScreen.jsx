import React from "react";
import styled from "styled-components";
import UsersTable from "../components/Users/UsersTable";

const Container = styled.div`
  flex: 4;
`;
const UsersScreen = () => {
  return (
    <Container>
      <UsersTable />
    </Container>
  );
};

export default UsersScreen;
