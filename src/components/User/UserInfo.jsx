import React from "react";
import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserShowTitle = styled.span`
  font-weight: 300;
`;
const UserShowUsername = styled.span`
  font-weight: 600;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserBottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const UserBottomTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: rgb(175, 170, 170);
`;
const UserBottomInfoTitle = styled.span`
  margin-left: 10px;
`;

const UserInfo = () => {
  return (
    <UserShow>
      <UserShowTop>
        <UserImg
          src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
          alt="Profile Picture"
        />
        <UserShowTopTitle>
          <UserShowUsername>Alonzo Ramirez</UserShowUsername>
          <UserShowTitle>Sorfware Developer</UserShowTitle>
        </UserShowTopTitle>
      </UserShowTop>
      <UserShowBottom>
        <UserBottomTitle>Account Details</UserBottomTitle>
        <UserBottomInfo>
          <PermIdentity style={{ fontSize: "16px" }} />
          <UserBottomInfoTitle>alonzocr1995</UserBottomInfoTitle>
        </UserBottomInfo>
        <UserBottomInfo>
          <CalendarToday style={{ fontSize: "16px" }} />
          <UserBottomInfoTitle>11/11/1995</UserBottomInfoTitle>
        </UserBottomInfo>
        <UserBottomTitle>Contact Details</UserBottomTitle>

        <UserBottomInfo>
          <PhoneAndroid style={{ fontSize: "16px" }} />
          <UserBottomInfoTitle>+506 86183896</UserBottomInfoTitle>
        </UserBottomInfo>
        <UserBottomInfo>
          <MailOutline style={{ fontSize: "16px" }} />
          <UserBottomInfoTitle>alonzo@gmail.com</UserBottomInfoTitle>
        </UserBottomInfo>
        <UserBottomInfo>
          <LocationSearching style={{ fontSize: "16px" }} />
          <UserBottomInfoTitle>Alajuela | Costa Rica</UserBottomInfoTitle>
        </UserBottomInfo>
      </UserShowBottom>
    </UserShow>
  );
};

export default UserInfo;
