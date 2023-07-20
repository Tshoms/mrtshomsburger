import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsSelected } from "./helper";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);
  //state -----------

  // comportement -------

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (event, idProduct) => {
    event.stopPropagation();
    handleAddToBasket(idProduct);
  };
  // affichage
  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }
  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            title={title}
            price={price}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={isModeAdmin ? () => handleProductSelected(id) : null}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsSelected(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event, id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: relative;
  background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px; /*à maitriser */
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
