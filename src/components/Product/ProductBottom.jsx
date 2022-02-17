import { Publish } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
  & form {
    display: flex;
    justify-content: space-between;
  }
`;
const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    margin-bottom: 10px;
    color: gray;
  }

  & input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }

  & select {
    margin-bottom: 10px;
  }
`;
const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductUpload = styled.div``;

const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 10px;
`;
const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;

const ProductBottom = () => {
  return (
    <Container>
      <form>
        <FormLeft>
          <label>Product Name</label>
          <input type="text" placeholder="gucci dress" />
          <label>In Stock</label>
          <select name="inStock" id="inStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormLeft>
        <FormRight>
          <ProductUpload>
            <UploadImg src="https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_960_720.jpg" />
            <label for="file">
              <Publish style={{ cursor: "pointer", color: "gray" }} />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </ProductUpload>
          <Button>Update</Button>
        </FormRight>
      </form>
    </Container>
  );
};

export default ProductBottom;
