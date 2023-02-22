import React from "react"
import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/About"
import LandingPage from "./components/LandingPage"
import {Box} from '@chakra-ui/react'
import Particles from "react-tsparticles"

export default function App() {

  const options = {
    fpsLimit:30,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "connect",
        },
        resize: true,
      },
    },
    modes: {
      grab: {
        opacity: 0.3,
      },
      connect: {
        lineLinked: {
          opacity:0.5
        }
      },
    },
    particles: {
      color: {
        value: ['#17CCF9','#06C2F2','#06AFD9','#059CC1'],
      },
      links: {
        color: '#30D1FA',
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.5,
        
      },
      number: {
        density: {
          enable: true,
          value_area: 3000,
        },
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 4,
      },
    }
  }

  /*
  1. Introduction
  2. Skills
  3. Projects
  4. Awards and Certifications
  5. Background: <Box bg='#121212' bgImage={bg} bgPos='center' h='100vh' bgSize="Cover">
  */
  return (
    <Box bg='#121212' overflowX='hidden'>
      <Box position='absolute' zIndex='0'>
        <Particles options={options} />
      </Box>
      <LandingPage />
      <Introduction />
      <About/> 
      <Skills />
      <Projects /> 
    </Box>
  )
}