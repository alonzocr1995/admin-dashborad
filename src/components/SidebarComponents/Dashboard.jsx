import React from "react";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

import styled from "styled-components";

const Menu = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h2`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const List = styled.ul`
  list-style: none;
  padding: 5px;
`;
const Item = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

const Dashboard = () => {
  return (
    <Menu>
      <Title>Dashboard</Title>
      <List>
        <Item>
          <LineStyle
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Home
        </Item>
        <Item>
          <Timeline
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Analytics
        </Item>
        <Item>
          <TrendingUp
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Sales
        </Item>
      </List>
    </Menu>
  );
};

export default Dashboard;
