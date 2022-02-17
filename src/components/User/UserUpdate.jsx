import { Publish } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
  margin-left: 20px;
`;
const Title = styled.h3`
  font-style: 24px;
`;
const UserForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & label {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const UserInput = styled.input`
  border: none;
  width: 250px;
  border-bottom: 1px solid gray;
  height: 30px;
`;
const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserUpload = styled.div`
  /* display: flex;
  align-items: center; */
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 10px;
`;
const UploadInput = styled.input`
  display: none;
`;
const UpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;

const UserUpdate = () => {
  return (
    <Container>
      <Title>Edit User</Title>
      <UserForm>
        <UserUpdateLeft>
          <UserItem>
            <label>Username</label>
            <UserInput type="text" placeholder="alonzocr1995"></UserInput>
          </UserItem>
          <UserItem>
            <label>Full Name</label>
            <UserInput type="text" placeholder="Alonzo Ramirez"></UserInput>
          </UserItem>
          <UserItem>
            <label>Email</label>
            <UserInput type="text" placeholder="alonzo@gmail.com"></UserInput>
          </UserItem>
          <UserItem>
            <label>Phone</label>
            <UserInput type="text" placeholder="+506 86183896"></UserInput>
          </UserItem>
          <UserItem>
            <label>Address</label>
            <UserInput
              type="text"
              placeholder="Alajuela | Costa Rica"
            ></UserInput>
          </UserItem>
        </UserUpdateLeft>
        <UserUpdateRight>
          <UserUpload>
            <Img
              src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
              alt="Profile Picture"
            />
            <label htmlFor="file">
              <Publish style={{ cursor: "pointer", color: "gray" }} />
            </label>
            <UploadInput type="file" id="file" />
          </UserUpload>
          <UpdateButton>Update</UpdateButton>
        </UserUpdateRight>
      </UserForm>
    </Container>
  );
};

export default UserUpdate;
