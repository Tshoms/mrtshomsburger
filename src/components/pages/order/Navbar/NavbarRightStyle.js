import React from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function NavbarRightStyle({ userName }) {
  // state ----------
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  // comportement -----------

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSide>
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
      />
      <Profile userName={userName} />
      <ToastAdmin />
    </NavbarRightSide>
  );
}

const NavbarRightSide = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
