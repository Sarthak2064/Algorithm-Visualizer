import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";

const Container = styled.div`
  background-color: #f8f9fa;
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
  font-family: "Inter", sans-serif;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <NavBar />
      <Controller />
      <AlgoDisplay />
      <Footer />
    </Container>
  );
}
