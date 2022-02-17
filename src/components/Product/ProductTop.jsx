import React from "react";
import styled from "styled-components";
import { productData } from "../../dummyData";
import Chart from "../Chart/Chart";

const Container = styled.div`
  display: flex;
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;
const ProductTopRight = styled.div`
  flex: 1;
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-weight: 600;
  }
`;
const ProductImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;
const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
const ProductInfoItem = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;
const InfoKey = styled.span``;
const InfoValue = styled.span`
  font-weight: 300;
`;

const ProductTop = () => {
  return (
    <Container>
      <ProductTopLeft>
        <Chart data={productData} dataKey="Sales" title="Sales Performance" />
      </ProductTopLeft>
      <ProductTopRight>
        <ProductInfoTop>
          <ProductImg
            src="https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_960_720.jpg"
            atl="dress"
          />
          <span>Gucci Dress</span>
        </ProductInfoTop>
        <ProductInfoBottom>
          <ProductInfoItem>
            <InfoKey>Id:</InfoKey>
            <InfoValue>1</InfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <InfoKey>Sales:</InfoKey>
            <InfoValue>5123</InfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <InfoKey>Active:</InfoKey>
            <InfoValue>yes</InfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <InfoKey>In Stock:</InfoKey>
            <InfoValue>no</InfoValue>
          </ProductInfoItem>
        </ProductInfoBottom>
      </ProductTopRight>
    </Container>
  );
};

export default ProductTop;
