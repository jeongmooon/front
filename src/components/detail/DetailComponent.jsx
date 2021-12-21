import React, { useState } from "react";
import styled from "styled-components";
import ChartComponent from "./chart/ChartComponent";
import DeletButtonComponets from "../delete/DeletButtonComponets";

const DetailBlock = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: auto;
`;

const CoktailImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ChartWrap = styled.div`
  width: 100%;
`;

const CoktailTitle = styled.h2`
  font-family: "KOTRA_SONGEULSSI";
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CoktailContentWrap = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  font-size: 12px;
  font-family: "GowunDodum-Regular";
  padding-bottom: 20px;
`;

const DetailComponent = ({ data, isAdminLogined }) => {
  const {
    _id,
    category,
    coktailName,
    cocktailContent,
    alcoholDegree,
    bitter,
    sour,
    imgURL,
    kind,
    sweet,
    perifume,
    sauceKind,
  } = data;
  
  return (
    <DetailBlock>
      <CoktailImg src={imgURL} style={{ width: "100%" }} />
      <CoktailTitle>{coktailName}</CoktailTitle>
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
        }}
      >
        😜 {alcoholDegree}%
      </div>
      <ChartWrap>
        <ChartComponent data={data} />
      </ChartWrap>
      <CoktailContentWrap>
        <hr />
        <br />
        🍸 들어간 술 : {kind} <br /> <br />
        🍹 추가 재료 : {sauceKind} <br /> <br />
        <hr />
        <br />
        <div dangerouslySetInnerHTML={{ __html: cocktailContent }} />
      </CoktailContentWrap>
    </DetailBlock>
  );
};

export default DetailComponent;
