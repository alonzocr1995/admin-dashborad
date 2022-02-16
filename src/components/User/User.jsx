import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const Button = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div``;
const UserShow = styled.div``;
const UserUpdate = styled.div``;

const User = () => {
  return (
    <Fragment>
      <Container>
        <Title>Edit User</Title>
        <Button>Create</Button>
      </Container>
      <UserContainer>
        <UserShow></UserShow>
        <UserUpdate></UserUpdate>
      </UserContainer>
    </Fragment>
  );
};

export default User;
