import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import UserUpdate from "./UserUpdate";

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
  background-color: darkblue;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const User = () => {
  return (
    <Fragment>
      <Container>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <Button>Create User</Button>
        </Link>
      </Container>
      <UserContainer>
        <UserInfo />
        <UserUpdate />
      </UserContainer>
    </Fragment>
  );
};

export default User;
