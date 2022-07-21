import "d3-transition";
import { select } from "d3-selection";
import {React} from 'react';
import ReactWordcloud from 'react-wordcloud';

 
function SimpleWordCloud() {
  const options = {
    rotations: 10,
    rotationAngles: [-30, 30],
    colors:['#30D1FA','#17CCF9','#06C2F2','#06AFD9','#059CC1'],
    enableTooltip:false,
    fontSizes:[30,30],
    fontFamily: 'Century Gothic',
    padding:5,
    transitionDuration:1000,
    };

  function getCallback(callback) {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      console.log('isActive: ', isActive)
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
          if (isActive) {
            if (word.text == "Python") {
              window.open(`https://www.python.org/`, "_blank")
            }else if (word.text == "Octave") {
              window.open(`https://www.gnu.org/software/octave/index`, "_blank")
            }else if (word.text == "Seaborn") {
              window.open(`https://seaborn.pydata.org/`, "_blank")
            }else if (word.text == "GAN") {
              window.open(`https://en.wikipedia.org/wiki/Generative_adversarial_network`, "_blank")
            }else if (word.text == "NLP") {
              window.open(`https://en.wikipedia.org/wiki/Natural_language_processing`, "_blank")
            } else{
              window.open(`https://en.wikipedia.org/wiki/${word.text}`, "_blank")}
            }
        })
        .transition()
        .attr("background", "white")
        .attr("font-size", isActive ? "40" : "30")
    };
  }

  const callbacks = {
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
  }

  const words = [
    {
      text: 'React',
      value: 5,
    },
    {
      text: 'NodeJS',
      value: 3,
    },
    {
      text: 'HTML',
      value: 3,
    },
    {
      text: 'CSS',
      value: 3,
    },
    {
      text: 'Tensorflow',
      value: 3,
    },
    {
      text: 'JavaScript',
      value: 5,
    },
    {
      text: 'Python',
      value: 5,
    },
    {
      text: 'MongoDB',
      value: 3,
    },
    {
      text: 'SQL',
      value: 3,
    },
    {
      text: 'Octave',
      value: 3,
    },
    {
      text: 'Matplotlib',
      value: 3,
    },
    {
      text: 'Seaborn',
      value: 3,
    },
    {
      text: 'GAN',
      value: 3,
    },
    {
      text: 'NLP',
      value: 3,
    },
    {
      text: 'C++',
      value: 3,
    },
    {
      text: 'Stata',
      value: 3,
    }
  ]
 return <ReactWordcloud
      callbacks={callbacks}
      options={options}
      words={words}
    />}

export default SimpleWordCloud