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
        <Link to={"/"}>
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <BsPersonCircle
        className="picture"
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
  min-width: 100px;

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
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;

    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 10px;
  }
`;
