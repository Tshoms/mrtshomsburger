import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightStyle({ userName }) {
  const [isModeAdmin, setisModeAdmin] = useState(false);

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
    setisModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSide>
      <ToggleButton
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
