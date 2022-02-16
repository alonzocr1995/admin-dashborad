import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import {
  TopbarContainer,
  Wrapper,
  TopbarLeft,
  IconContainer,
  TopbarRight,
  TopAvatarImg,
  Logo,
} from "../UI/Topbar/styled";

const Topbar = () => {
  return (
    <TopbarContainer>
      <Wrapper>
        <TopbarLeft>
          <Logo>Void Admin</Logo>
        </TopbarLeft>
        <TopbarRight>
          <IconContainer>
            <Badge badgeContent={2} color="secondary">
              <NotificationsNone />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Badge badgeContent={2} color="secondary">
              <Language />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Badge>
              <Settings />
            </Badge>
          </IconContainer>
          <TopAvatarImg
            src="https://i1.sndcdn.com/avatars-000475412136-0papup-t500x500.jpg"
            alt="void image"
          />
        </TopbarRight>
      </Wrapper>
    </TopbarContainer>
  );
};

export default Topbar;
