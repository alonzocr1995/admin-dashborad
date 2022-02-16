import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart/Chart";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import WidgetLarge from "../components/Widgets/WidgetLarge";
import WidgetSmall from "../components/Widgets/WidgetSmall";
import { userData } from "../dummyData";

const Container = styled.div`
  flex: 4;
`;
const WidgetsContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <WidgetsContainer>
        <WidgetSmall />
        <WidgetLarge />
      </WidgetsContainer>
    </Container>
  );
};

export default HomeScreen;
