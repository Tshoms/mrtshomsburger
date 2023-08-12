import styled from "styled-components";
import { theme } from "../../theme";

export default function Brand({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-style.png" alt="logo-crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }

  @media (max-width: 1210px) {
    h1 {
      font-size: 25px;
    }
    img {
      height: 30px;
      width: 40px;
    }
  }

  @media (max-width: 444px) {
    h1 {
      font-size: 10px;
    }
    img {
      height: 25px;
      width: 20px;
    }
  }
`;
