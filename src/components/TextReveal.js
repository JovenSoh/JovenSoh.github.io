import { useAnimation, motion } from "framer-motion";
import { Text } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

export default function TextReveal(props) {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden")
        }
    }, [controls, inView]);

    const sentence = {
      hidden: {opacity:1},
      visible: {
        opacity: 1,
        transition: {
          delay: 1,
          staggerChildren: props.delay
          }
        }
    }
  
    const letter = {
      hidden: {opacity: 0},
      visible: {
        opacity:1,
      }
    }

    let line = props.children
    
    return(
      <Text ref={ref}>
        <motion.p variants={sentence} initial="hidden" animate={controls} >
          { line.split("").map((char,index) => {
            return (
              <motion.span key={char+"-"+index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.p>
      </Text>
    )
  }