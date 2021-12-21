import React from "react";
import styled from "styled-components";

const CategoryTitle = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  font-family: "KOTRA_SONGEULSSI";
  margin-bottom: 20px;
`;
const CategoryComponent = ({ ...rest }) => {
  return <CategoryTitle {...rest} />;
};

export default CategoryComponent;
