import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  font-size: calc(1.325rem + 0.9vw);
`;

export const Header = () => {
  return (
    <div>
      <HeaderStyle className="text-center bg-light py-2 fw-bolder">
        Algorithm Visualizer
      </HeaderStyle>
    </div>
  );
};
