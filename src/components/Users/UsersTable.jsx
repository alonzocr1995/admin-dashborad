import React, { Fragment, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
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

const UsersTable = () => {
  const [data, setData] = useState(userRows);

  const handleUserDelete = (id) => {
    setData((prev) => prev.filter((user) => user.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserContainer>
            <UserImg src={params.row.avatar} alt="" />
            <span>{params.row.username}</span>
          </UserContainer>
        );
      },
    },
    { field: "email", headerName: "E-Mail", width: 200 },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Fragment>
          <Link to={`/users/${params.row.id}`}>
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

export default UsersTable;
