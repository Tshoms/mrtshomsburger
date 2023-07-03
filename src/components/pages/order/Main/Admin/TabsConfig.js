import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";

export const getTabsConfig = (hasAlreadyClicked) => [
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline className="icon" />,
    content: hasAlreadyClicked ? <EditForm /> : <HintMessage />,
  },
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus className="icon" />,
    content: <AddForm />,
  },
];

export const getTabIndexSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
