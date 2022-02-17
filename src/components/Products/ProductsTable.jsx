import React, { Fragment } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #2c515b;
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const ProductsTable = () => {
  const [data, setData] = useState(productRows);

  const handleUserDelete = (id) => {
    setData((prev) => prev.filter((product) => product.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductContainer>
            <Img src={params.row.img} alt="" />
            <span>{params.row.name}</span>
          </ProductContainer>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Fragment>
          <Link to={`/product/${params.row.id}`}>
            <EditButton>Edit</EditButton>
          </Link>
          <DeleteOutline
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleUserDelete(params.row.id)}
          />
        </Fragment>
      ),
    },
  ];

  return (
    <DataGrid
      rows={data}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};

export default ProductsTable;
