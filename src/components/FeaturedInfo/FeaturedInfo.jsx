import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
`;
const Title = styled.span`
  font-weight: 20;
`;
const MoneyContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
const FeaturedRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Icon = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;

  color: ${(props) => props.color};
`;
const FeaturedSub = styled.span`
  font-style: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <FeaturedMoney>$2,256</FeaturedMoney>
          <FeaturedRate>
            -11.4
            <Icon color="red">
              <ArrowDownward style={{ fontSize: "14px" }} />
            </Icon>
          </FeaturedRate>
        </MoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <FeaturedMoney>$4,256</FeaturedMoney>
          <FeaturedRate>
            -11.4
            <Icon color="red">
              <ArrowDownward style={{ fontSize: "14px" }} />
            </Icon>
          </FeaturedRate>
        </MoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <FeaturedMoney>$1,256</FeaturedMoney>
          <FeaturedRate>
            +2.4
            <Icon color="green">
              <ArrowUpward style={{ fontSize: "14px" }} />
            </Icon>
          </FeaturedRate>
        </MoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
