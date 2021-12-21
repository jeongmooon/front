import React from "react";
import NavbarComponent from "../../components/common/NavbarComponent";
import { useNavigate } from "react-router-dom";

const NavbarContainer = () => {
  const navigate = useNavigate();

  const onClickSearch = () => {
    navigate("/search");
  };

  return <NavbarComponent onClickSearch={onClickSearch} />;
};

export default NavbarContainer;
