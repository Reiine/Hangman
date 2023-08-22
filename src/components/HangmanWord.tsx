import  { useEffect, useState } from "react";

interface HangmanWordProps {
  guessedWord: string[];
  wordToGuess: string;
  incorrectLetter: string[];
}

function HangmanWord({ guessedWord, wordToGuess, incorrectLetter }: HangmanWordProps) {
  const words = wordToGuess.split(" ");
  const [lose, setLose] = useState(false);

  useEffect(() => {
    if (incorrectLetter && incorrectLetter.length > 5) {
      setLose(true);
    }
  }, [incorrectLetter]);

  return (
    <div className="word-cover">
      <h1 className="letters">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="word">
            {word.split("").map((letter, letterIndex) => (
              <div key={letterIndex} className="renderLetter">
                <span style={{ visibility: guessedWord.includes(letter) || lose ? "visible" : "hidden" }}>
                  {letter.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        ))}
      </h1>
    </div>
  );
}

export default HangmanWord;
