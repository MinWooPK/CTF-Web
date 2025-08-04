import { useEffect, useState } from "react";
import { TypingTextStyled } from "./style";

const TypingText = ({
  text,
  speed = 150,
  pause = 8000,
  pauseBeforeTyping = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && displayedText === text) {
      // Espera 'pause' antes de borrar
      timeoutId = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      // Espera 'pauseBeforeTyping' antes de escribir otra vez
      timeoutId = setTimeout(() => setIsDeleting(false), pauseBeforeTyping);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1); // borrar letra a letra
          } else {
            return text.slice(0, prev.length + 1); // escribir letra a letra
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, text, speed, pause, pauseBeforeTyping]);

  return <TypingTextStyled>{displayedText}</TypingTextStyled>;
};

export default TypingText;
