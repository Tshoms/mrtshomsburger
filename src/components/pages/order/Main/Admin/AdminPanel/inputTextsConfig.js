import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextsConfig = (newProduct) => [
  {
    id: 0,
    name: "title",
    value: newProduct.title,
    type: "text",
    placeholder: "Nom du produit (ex: super burger)",
    icon: <FaHamburger />,
    version: "minimaliste",
  },
  {
    id: 1,
    name: "imageSource",
    value: newProduct.imageSource,
    type: "text",
    placeholder: "lien Url d'une image (ex: https://la-photo-de-mon-image.png)",
    icon: <BsFillCameraFill />,
    version: "minimaliste",
  },
  {
    id: 2,
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "prix",
    icon: <MdOutlineEuro />,
    version: "minimaliste",
  },
];
