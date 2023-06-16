import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTabSelected) => [
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
  // {
  //   label: "",
  //   icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   className: isCollapsed ? "icon-activ" : "",
  //   onClick: () => setIsCollapsed(!isCollapsed),
  // },
];
