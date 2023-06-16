import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const tabsConfig = [
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline className="icon" />,
  },
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus className="icon" />,
  },
];

export const getTabIndexSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
