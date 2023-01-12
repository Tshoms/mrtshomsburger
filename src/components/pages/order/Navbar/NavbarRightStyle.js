import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import { useContext } from "react";
import PanelContext from "../../../../context/PanelContext";

export default function NavbarRightStyle({ userName }) {
  // state ----------
  const [isModeAdmin, setisModeAdmin] = useState(false);

  // context provider - useContext
  const { panelAdmin, setPanelAdmin } = useContext(PanelContext);

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
    setisModeAdmin(!isModeAdmin);
  };

  const handelclick = () => {
    console.log("hello world !");
    console.log("info :", panelAdmin);
    setPanelAdmin(!panelAdmin);
  };

  return (
    <NavbarRightSide>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
        onClick={handelclick}
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
