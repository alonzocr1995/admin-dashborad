import React from "react";
import styled from "styled-components";
import ProductsTable from "../components/Products/ProductsTable";

const Container = styled.div`
  flex: 4;
`;
const ProductsScreen = () => {
  return (
    <Container>
      <ProductsTable />
    </Container>
  );
};

export default ProductsScreen;
