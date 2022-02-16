import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
  padding: 20px;
  margin-right: 15px;
`;
const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  object-fit: cover;
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.span`
  font-weight: bold;
`;
const UserJob = styled.span`
  font-weight: 300;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
`;

const WidgetSmall = () => {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <Item>
          <Img
            src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
            alt="Profile Picture"
          />
          <UserContainer>
            <Username>Alonzo Ramirez</Username>
            <UserJob>Software Developer</UserJob>
          </UserContainer>
          <Button>
            <Visibility style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </Item>
        <Item>
          <Img
            src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
            alt="Profile Picture"
          />
          <UserContainer>
            <Username>Alonzo Ramirez</Username>
            <UserJob>Software Developer</UserJob>
          </UserContainer>
          <Button>
            <Visibility style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </Item>
        <Item>
          <Img
            src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
            alt="Profile Picture"
          />
          <UserContainer>
            <Username>Alonzo Ramirez</Username>
            <UserJob>Software Developer</UserJob>
          </UserContainer>
          <Button>
            <Visibility style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </Item>
        <Item>
          <Img
            src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
            alt="Profile Picture"
          />
          <UserContainer>
            <Username>Alonzo Ramirez</Username>
            <UserJob>Software Developer</UserJob>
          </UserContainer>
          <Button>
            <Visibility style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </Item>
      </List>
    </Container>
  );
};

export default WidgetSmall;
