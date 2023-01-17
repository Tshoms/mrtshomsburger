import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
export default function TabsAdd() {
  return (
    <TabsAddStyled>
      <div className="container-add">
        <div className="bloc-picture">
          <span>aucune image</span>
        </div>
        <div className="bloc-input">
          <TextInput
            className={"input-tab-add"}
            Icon={<FaHamburger className="icon" />}
          />
          <TextInput
            className={"input-tab-add"}
            Icon={<BsFillCameraFill className="icon" />}
          />
        </div>
      </div>
    </TabsAddStyled>
  );
}

const TabsAddStyled = styled.div`
  height: 278px;
  width: 100%;
  border: 1px solid white;

  .container-add {
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 70%;
    border: 1px solid red;
    margin-top: 15px;
    margin-left: 20px;

    .bloc-picture {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60%;
      width: 20%;
      margin-top: 10px;
      margin-left: 10px;
      border: 1px solid rgb(228, 229, 233);
      border-radius: 5px;

      span {
        color: rgb(147, 162, 177);
      }
    }

    .bloc-input {
      display: flex;
      flex-direction: column;
      height: 90%;
      width: 80%;
      margin-top: 10px;
      /* border: 1px solid green; */

      .input-tab-add {
        width: 70%;
        padding: 10px 10px;
        margin-top: 0px;
        margin-left: 10px;
        background-color: ${theme.colors.greyLight};
        color: ${theme.colors.greyLight};
      }

      .icon {
        font-size: 19px;
        color: ${theme.colors.greyDark};
      }
    }
  }
`;
