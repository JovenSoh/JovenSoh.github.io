import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return( <span>{props.children}</span>)
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
export default function TextSlide(props) {

  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955],delay:props.delay, duration: 0.75 }
    }
  };

  console.log(props)
  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  console.log(words)
  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
      <Text>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                    animate={props.controls}
                  >
                    {word}
                  </motion.span>
                </span>
          </Wrapper>
        );
      })}
        </Text>
  );
};

