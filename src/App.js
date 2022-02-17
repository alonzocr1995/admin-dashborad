import { Fragment } from "react";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import Sidebar from "./components/SidebarComponents/Sidebar";
import HomeScreen from "./pages/HomeScreen";
import UsersScreen from "./pages/UsersScreen";
import { Route, Routes } from "react-router-dom";
import UserScreen from "./pages/UserScreen";
import NewUser from "./pages/NewUser";
import ProductsScreen from "./pages/ProductsScreen";
import ProductScreen from "./pages/ProductScreen";
import NewProductScreen from "./pages/NewProductScreen";

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
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/product/:productId" element={<ProductScreen />} />
          <Route path="/newProduct" element={<NewProductScreen />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
