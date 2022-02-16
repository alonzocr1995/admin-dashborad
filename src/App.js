import { Fragment } from "react";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import Sidebar from "./components/SidebarComponents/Sidebar";
import HomeScreen from "./pages/HomeScreen";
import UsersScreen from "./pages/UsersScreen";
import { Route, Routes } from "react-router-dom";
import UserScreen from "./pages/UserScreen";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <Fragment>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/user/:userId" element={<UserScreen />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
