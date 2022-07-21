import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import './style.css'

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle:{
        fontFamily:'Century Gothic',
        color:'#15bfe3',
        fontSize:'24px',
        bg:'rgba(18,18,18,0.9)',
      }
    },
    Text: {
      baseStyle:{
        fontFamily:'Century Gothic',
        color:'#a3a3a3',
        bg:'rgba(18,18,18,0.9)',
      }
    },
  }
})


ReactDOM.render(
  <ChakraProvider theme={theme} > 
      <App />
  </ChakraProvider>,
  document.getElementById("root")
);