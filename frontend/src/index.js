import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Forecast from "./components/Forecast";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Forecast />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)