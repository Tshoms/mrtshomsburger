import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";

export default function Profile({ userName }) {
  return (
    <ProfileStyle>
      <div className="info ">
        <p>
          Hey, <b>{userName}</b>
        </p>
        <Link to={"/"}>Se déconnecter</Link>
      </div>
      <BsPersonCircle
        className="icon"
        size={40}
        color={theme.colors.greyDark}
      />
    </ProfileStyle>
  );
}

const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 5px;

    p {
      margin: 0;
      color: ${theme.colors.greyBlue};

      b {
        color: ${theme.colors.primary};
      }
    }
  }

  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
  }
  a {
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    border: 0px;
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.XXS};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyDark};
    &:hover {
      text-decoration: underline ${theme.colors.dark};
    }
  }
  .icon {
    height: auto;
    display: flex;

    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 10px;
  }
`;
