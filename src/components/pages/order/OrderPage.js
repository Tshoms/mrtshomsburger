import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

function OrderPage() {
  // state ----------
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const objetMenu = {
    id: new Date().getTime(),
    title: "nouveau produit",
    image:
      "https://www.radiofrance.fr/s3/cruiser-production/2020/07/aac65c59-6e65-4410-9929-9ff6359d4861/1200x680_photo-1572802419224-296b0aeee0d9.jpg",
    price: 2.5,
  };

  const handleAdd = (e) => {
    e.preventDefault();
    //1. copy du state.
    const menuCopy = [...menu];
    // 2. manipulation su state.
    const menuUpdate = [objetMenu, ...menuCopy];
    // 3. Update du state avec le setter.
    setMenu(menuUpdate);
  };

  // provider for context w state.
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
  };

  // rendu ------------
  return (
    <OrderStyled>
      <div className="container">
        <OrderContext.Provider value={orderContextValue}>
          <NavBar />
          <Main />
        </OrderContext.Provider>
      </div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    display: flex;
    flex-direction: column;
    width: 1400px;
    position: relative; /* imporant pour le composant <Admin/> */
  }
`;

export default OrderPage;
