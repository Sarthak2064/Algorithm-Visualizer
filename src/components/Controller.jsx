import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import { VscDebugStart } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPause } from "react-icons/im";

import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { delay } from "../common/helper";

import shallow from "zustand/shallow";
import { useControls, useData } from "../common/store";
import {
  convertInputToArrayString,
  convertArrayStringToArray,
  getRandomArray,
} from "../common/helper";

let theme = createTheme({
  palette: {
    secondary: {
      main: "#212121",
    },
  },
});

const ControlBar = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const ArrayBar = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 60%;
  flex-grow: 1;
  min-width: 300px;
`;

const ExecutionBar = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 40%;
  flex-grow: 1;
`;

const Hover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export function Controller() {
  const [isPausing, setIsPausing] = useState(false);

  const [progress, speed] = useControls(
    (state) => [state.progress, state.speed],
    shallow
  );

  const [sortingArray, setSortingArray] = useData(
    (state) => [state.sortingArray, state.setSortingArray],
    shallow
  );

  const [startSorting, pauseSorting, resetSorting, setSpeed] = useControls(
    (state) => [
      state.startSorting,
      state.pauseSorting,
      state.resetSorting,
      state.setSpeed,
    ],
    shallow
  );

  const [arrayInput, setArrayInput] = useState(sortingArray);

  const startElement = (
    <Hover>
      <VscDebugStart onClick={startSorting} />
    </Hover>
  );
  const pauseElement = (
    <Hover>
      <ImPause onClick={pauseAndDelaySorting} />
    </Hover>
  );
  const resetElement = (
    <Hover>
      <VscDebugRestart onClick={resetSorting} />
    </Hover>
  );
  const disabledPauseElement = (
    <Hover>
      <ImPause style={{ color: "#e5e5e5" }} />
    </Hover>
  );

  async function pauseAndDelaySorting() {
    pauseSorting();
    setIsPausing(true);
    await delay(useControls.getState().swapTime);
    setIsPausing(false);
  }

  function arrayDataChangeHandler(value) {
    const arrayString = convertInputToArrayString(value);
    setArrayInput(arrayString);

    const array = convertArrayStringToArray(arrayString);
    setSortingArray(array);
    resetSorting();
  }

  function generate() {
    const randomArray = getRandomArray();
    setArrayInput(randomArray);
    setSortingArray(randomArray);
    resetSorting();
  }

  function getProgressButton() {
    if (isPausing) return disabledPauseElement;

    switch (progress) {
      case "reset":
        return startElement;
      case "start":
        return pauseElement;
      case "pause":
        return startElement;
      case "done":
        return disabledPauseElement;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <ControlBar>
        <ArrayBar>
          <Button variant="contained" color="secondary" onClick={generate}>
            <div style={{ color: "#e5e5e5", fontWeight: "bold" }}>Generate</div>
          </Button>
          <TextField
            id="outlined-basic"
            label="Enter integers you want to sort (Comma Separated)"
            color="secondary"
            onChange={(event) => arrayDataChangeHandler(event.target.value)}
            value={arrayInput}
            size="small"
            width="100px"
            style={{ flexGrow: 1, margin: "0 10px" }}
          />
        </ArrayBar>
        <ExecutionBar>
          <Slider
            key={`slider-${speed}`}
            defaultValue={speed}
            color="secondary"
            onChange={(event, value) => setSpeed(value)}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            style={{ flexGrow: 1, flexBasis: "100%" }}
          />

          <div
            style={{ display: "flex", marginLeft: "20px", columnGap: "5px" }}
          >
            {getProgressButton()}
            {resetElement}
          </div>
        </ExecutionBar>
      </ControlBar>
    </ThemeProvider>
  );
}
