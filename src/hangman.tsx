import React from "react";
import { randomBlankPangram, randomPangram } from "./pangrams";

export const Hangman: React.FC<HangmanProps> = props => {
  let pangram1 = randomPangram();
  let blankPangram1 = randomBlankPangram();

  for (let index = 0; index < pangram1.length; index++) {
    if (props.letter === pangram1[index]) {
      blankPangram1[index] = props.letter;
    }
  }

  if (blankPangram1.includes("_")) {
    return <>{blankPangram1}</>;
  }

  return (
    <>
      <div>{blankPangram1}</div>
      <div className="interaction won"> You won again</div>
    </>
  );
};

interface HangmanProps {
  letter: string;
}
