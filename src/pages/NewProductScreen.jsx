import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;

  & form {
    margin-top: 10px;
  }
`;

const Title = styled.h1``;

const ProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & input {
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  cursor: pointer;
  padding: 7px 10px;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 20px;
`;

const NewProductScreen = () => {
  return (
    <Container>
      <Title className="addProductTitle">New Product</Title>
      <form className="addProductForm">
        <ProductItem>
          <label>Image</label>
          <input type="file" id="file" />
        </ProductItem>
        <ProductItem>
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </ProductItem>
        <ProductItem>
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </ProductItem>
        <ProductItem>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </ProductItem>
        <button className="addProductButton">Create</button>
      </form>
    </Container>
  );
};

export default NewProductScreen;
