import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(186, 186, 186, 0.73);
  box-shadow: 0px 0px 11px -1px rgba(165, 165, 165, 0.73);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const TRow = styled.tr``;
const THead = styled.th`
  text-align: left;
`;
const TDataUser = styled.td`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const UserName = styled.span`
  font-weight: 600;
`;

const TDataDate = styled.td`
  font-weight: 300;
`;
const TDataAmount = styled.td`
  font-weight: 300;
`;
const TDataStatus = styled.td``;
const Button = styled.button`
  /* display: flex;
  align-items: center; */
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: ${(props) =>
    props.type === "Approved"
      ? "#b1fdc0"
      : props.type === "Declined"
      ? "#f1a59feb"
      : "#93eef3"};
  color: ${(props) =>
    props.type === "Approved"
      ? "#007347"
      : props.type === "Declined"
      ? "#850900eb"
      : "#01656a"};
`;

// const Container = styled.div``;

const WidgetLarge = () => {
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <TRow>
          <THead>Customer</THead>
          <THead>Date</THead>
          <THead>Amount</THead>
          <THead>Staus</THead>
        </TRow>
        <TRow>
          <TDataUser>
            <Img
              src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.18169-9/23621504_1776520519056777_2784285158881546677_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=6HtBdcdNIOYAX_gLgTQ&_nc_ht=scontent.fsjo14-1.fna&oh=00_AT8oHmhXIJFOFU4JhP_7V-4w6qPVvAvhBKhyDLtoGdUwhw&oe=6220EE1F"
              alt="Profile Picture"
            />
            <UserName>Tiqui Valverde</UserName>
          </TDataUser>
          <TDataDate>2 Nov 2022</TDataDate>
          <TDataAmount>$266.99</TDataAmount>
          <TDataStatus>
            <Button type="Approved">Approved</Button>
          </TDataStatus>
        </TRow>
        <TRow>
          <TDataUser>
            <Img
              src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.18169-9/23621504_1776520519056777_2784285158881546677_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=6HtBdcdNIOYAX_gLgTQ&_nc_ht=scontent.fsjo14-1.fna&oh=00_AT8oHmhXIJFOFU4JhP_7V-4w6qPVvAvhBKhyDLtoGdUwhw&oe=6220EE1F"
              alt="Profile Picture"
            />
            <UserName>Tiqui Valverde</UserName>
          </TDataUser>
          <TDataDate>2 Nov 2022</TDataDate>
          <TDataAmount>$266.99</TDataAmount>
          <TDataStatus>
            <Button type="Declined">Declined</Button>
          </TDataStatus>
        </TRow>
        <TRow>
          <TDataUser>
            <Img
              src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.18169-9/23621504_1776520519056777_2784285158881546677_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=6HtBdcdNIOYAX_gLgTQ&_nc_ht=scontent.fsjo14-1.fna&oh=00_AT8oHmhXIJFOFU4JhP_7V-4w6qPVvAvhBKhyDLtoGdUwhw&oe=6220EE1F"
              alt="Profile Picture"
            />
            <UserName>Tiqui Valverde</UserName>
          </TDataUser>
          <TDataDate>2 Nov 2022</TDataDate>
          <TDataAmount>$266.99</TDataAmount>
          <TDataStatus>
            <Button type="Pending">Pending</Button>
          </TDataStatus>
        </TRow>
        <TRow>
          <TDataUser>
            <Img
              src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.18169-9/23621504_1776520519056777_2784285158881546677_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=6HtBdcdNIOYAX_gLgTQ&_nc_ht=scontent.fsjo14-1.fna&oh=00_AT8oHmhXIJFOFU4JhP_7V-4w6qPVvAvhBKhyDLtoGdUwhw&oe=6220EE1F"
              alt="Profile Picture"
            />
            <UserName>Tiqui Valverde</UserName>
          </TDataUser>
          <TDataDate>2 Nov 2022</TDataDate>
          <TDataAmount>$266.99</TDataAmount>
          <TDataStatus>
            <Button type="Approved">Approved</Button>
          </TDataStatus>
        </TRow>
      </Table>
    </Container>
  );
};

export default WidgetLarge;
