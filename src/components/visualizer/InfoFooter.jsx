import React from "react";
import styled from "styled-components";
import { Timer } from "./Timer";

const InfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 20rem;
  margin-top: 0.5rem;
`;

const TimerDiv = styled.div`
  display: flex;
  column-gap: 5px;
  min-width: 5rem;
  justify-content: flex-end;
`;

export function InfoFooter({
  swapCount,
  isAlgoExecutionOver,
  comparisionCount,
  children,
}) {
  return (
    <InfoFlex>
      <div>
        Swaps: <strong>{swapCount}</strong>
      </div>
      <TimerDiv>
        <span>Time:</span>
        <strong>
          <Timer isAlgoExecutionOver={isAlgoExecutionOver} />
        </strong>
      </TimerDiv>
      <div>
        Comparisions: <strong>{comparisionCount}</strong>
      </div>
    </InfoFlex>
  );
}
