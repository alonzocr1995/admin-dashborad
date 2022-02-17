import React from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductScreen = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};

export default ProductScreen;
