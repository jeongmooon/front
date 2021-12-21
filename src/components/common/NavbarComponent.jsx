import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { useNavigate } from "react-router-dom";
import SearchComponent from "./search/SearchComponent";

const NavbarBlock = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 999;
  background: #fff;
`;

const NavbarWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  line-height: 40px;

  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const NavbarComponent = ({ onClickSearch }) => {
  const navigate = useNavigate();
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div
          className="left"
          style={{
            fontFamily: "KOTRA_SONGEULSSI",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        >
          <img
            style={{ height: "40px", cursor: "pointer" }}
            src="https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1640049481453.png"
            alt="LOGO"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
            }}
          />
        </div>
        <div className="right">
          <SearchComponent onClickSearch={onClickSearch} />
        </div>
      </NavbarWrapper>
    </NavbarBlock>
  );
};

export default NavbarComponent;
