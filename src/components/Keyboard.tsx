import React, { useEffect } from 'react';

interface KeyboardProps {
  setGuessedWord: React.Dispatch<React.SetStateAction<string[]>>;
  guessedWord: string[];
  incorrectLetter: string[];
  wordToGuess: string;
}

function Keyboard({ setGuessedWord, guessedWord, incorrectLetter, wordToGuess }: KeyboardProps) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  useEffect(() => {
    const alphabetButtons = document.querySelectorAll('.alphabet');

    if (incorrectLetter.length === 6) {
      alphabetButtons.forEach(button => {
        button.classList.add('disable');
      });
    }
  }, [incorrectLetter]);

  return (
    <div className="keyboard-cover">
      {alphabets.split('').map(alphabet => (
        <div key={alphabet}>
          <button
            onClick={() => setGuessedWord([...guessedWord, alphabet])}
            className={`alphabet ${
              incorrectLetter.includes(alphabet) ? 'disable' : ''
            } ${guessedWord.includes(alphabet) ? (wordToGuess.split('').includes(alphabet) ? 'correct' : '') : ''}`}
          >
            {alphabet.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
