import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEuro } from "react-icons/bi";
import SelectStore from "../select/SelectStore";
import SelectPub from "../select/SelectPub";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

export default function AddForm() {
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
          <div className="bloc-low-input">
            <TextInput
              className={"input-low"}
              Icon={<BiEuro className="icon" />}
            />
            <SelectStore />
            <SelectPub />
          </div>
          <div className="primary-container">
            <PrimaryButton
              className="primary-contents"
              label={"Ajouter un nouveau produit au menu"}
            />
          </div>
        </div>
      </div>
    </TabsAddStyled>
  );
}

const TabsAddStyled = styled.div`
  height: 278px;
  width: 100%;

  .container-add {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 70%;

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
        width: 73%;
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

      .bloc-low-input {
        display: flex;
        flex-direction: row;
        height: 45px;
        width: 95%;
        /* border: 1px solid blue; */
        margin-left: 10px;

        .input-low {
          height: 100%;
          width: 25%;
          background-color: ${theme.colors.greyLight};
          color: ${theme.colors.greyLight};
          padding: 0px 10px;
          margin-top: 0px;
        }

        .icon {
          font-size: 25px;
          color: ${theme.colors.greyDark};
        }
      }

      .primary-container {
        margin-top: 15px;
        margin-left: 10px;
        width: 46%;
        /* border: 1px solid black; */

        .primary-contents {
          padding: 12px;
          color: white;
          background-color: rgb(96, 189, 79);
          border: 1px solid rgb(96, 189, 79);

          :hover {
            color: rgb(96, 189, 79);
            background-color: ${theme.colors.white};
            border: 1px solid rgb(96, 189, 79);
            transition: all 200ms ease-out;
          }
          &:active {
            color: ${theme.colors.white};
            background-color: rgb(96, 189, 79);
          }
        }
      }
    }
  }
`;
