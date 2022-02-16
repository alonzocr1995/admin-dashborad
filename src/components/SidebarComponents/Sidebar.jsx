import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import QuickMenu from "./QuickMenu";
import Notifications from "./Notifications";
import Staff from "./Staff";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Wrapper>
        <Dashboard />
        <QuickMenu />
        <Notifications />
        <Staff />
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
