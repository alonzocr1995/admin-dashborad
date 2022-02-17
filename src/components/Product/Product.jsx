import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductBottom from "./ProductBottom";
import ProductTop from "./ProductTop";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const Button = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: darkblue;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const Product = () => {
  return (
    <Fragment>
      <Container>
        <Title>Product</Title>
        <Link to="/newProduct">
          <Button>Create Product</Button>
        </Link>
      </Container>
      <ProductTop />
      <ProductBottom />
    </Fragment>
  );
};

export default Product;
