import React from "react";
import {
  AttachMoney,
  BarChart,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";

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

const QuickMenu = () => {
  return (
    <Menu>
      <Title>Quick Menu</Title>
      <List>
        <Item>
          <PermIdentity
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Users
        </Item>
        <Item>
          <Storefront
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Products
        </Item>
        <Item>
          <AttachMoney
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Transactions
        </Item>
        <Item>
          <BarChart
            style={{ marginRight: "5px", fontSize: "20px !important" }}
          />
          Reports
        </Item>
      </List>
    </Menu>
  );
};

export default QuickMenu;
