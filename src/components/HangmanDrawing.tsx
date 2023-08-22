import React, { useEffect } from 'react';

interface HangmanDrawingProps {
  incorrectLetter: string[];
}

function HangmanDrawing({ incorrectLetter }: HangmanDrawingProps) {
  useEffect(() => {
    const head = document.getElementsByClassName('head')[0] as HTMLElement;
    const hangbody = document.getElementsByClassName('hang-body')[0] as HTMLElement;
    const hand1 = document.getElementsByClassName('hand1')[0] as HTMLElement;
    const hand2 = document.getElementsByClassName('hand2')[0] as HTMLElement;
    const leg1 = document.getElementsByClassName('leg1')[0] as HTMLElement;
    const leg2 = document.getElementsByClassName('leg2')[0] as HTMLElement;

    if (incorrectLetter.length === 1) head.classList.remove('disnone');
    if (incorrectLetter.length === 2) hangbody.classList.remove('disnone');
    if (incorrectLetter.length === 3) hand1.classList.remove('disnone');
    if (incorrectLetter.length === 4) hand2.classList.remove('disnone');
    if (incorrectLetter.length === 5) leg1.classList.remove('disnone');
    if (incorrectLetter.length === 6) leg2.classList.remove('disnone');
  }, [incorrectLetter]);

  return (
    <div className="drawing-cover">
      <div className="ceil" />
      <div className="rope" />
      <div className="head disnone" />
      <div className="hand2 disnone" />
      <div className="hand1 disnone" />
      <div className="hang-body disnone" />
      <div className="leg2 disnone" />
      <div className="leg1 disnone" />
      <div className="pole" />
      <div className="bottom-bar" />
    </div>
  );
}

export default HangmanDrawing;
