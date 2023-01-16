import React from "react";
import styled from "styled-components";
// import TextInput from "../../../../../reusable-ui/TextInput";

export default function TabsAdd() {
  return (
    <TabsAddStyled>
      <div className="container-add">
        <div className="bloc-picture"></div>
        <div className="bloc-input"></div>
      </div>
    </TabsAddStyled>
  );
}

const TabsAddStyled = styled.div`
  height: 278px;
  width: 100%;
  border: 3px solid blue;

  .container-add {
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 70%;
    border: 1px solid red;
    margin-top: 15px;
    margin-left: 20px;

    .bloc-picture {
      height: 70%;
      width: 20%;
      margin-top: 10px;
      margin-left: 10px;
      border: 1px solid blue;
    }

    .bloc-input {
      display: flex;
      flex-direction: column;
      height: 90%;
      width: 80%;
      margin-top: 10px;
      border: 1px solid green;
    }
  }
`;
