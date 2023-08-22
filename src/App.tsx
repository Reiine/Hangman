import React, { useState } from 'react';
import './App.css';
import words from './movies.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';

interface AppProps {}

function App({}: AppProps) {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)].toLowerCase();
  });
  const [guessedWord, setGuessedWord] = useState<string[]>([]);
  
  const uniqueLetters = Array.from(new Set(wordToGuess.replace(/\s/g, '')));
  const guessedUniqueLetters = Array.from(new Set(guessedWord));
  
  const incorrectLetter = guessedUniqueLetters.filter(
    letter => !wordToGuess.includes(letter)
  );
  
  const win = uniqueLetters.every(letter => guessedUniqueLetters.includes(letter));
  
  return (
    <div className="app">
      <h1>{(incorrectLetter.length > 5 ? 'YOU LOSE' : win ? 'YOU WIN' : 'Hangman')}</h1>
      <HangmanDrawing incorrectLetter={incorrectLetter} />
      <HangmanWord guessedWord={guessedWord} wordToGuess={wordToGuess} incorrectLetter={incorrectLetter} />
      <Keyboard
        setGuessedWord={setGuessedWord}
        guessedWord={guessedWord}
        incorrectLetter={incorrectLetter}
        wordToGuess={wordToGuess}
      />
    </div>
  );
}

export default App;
