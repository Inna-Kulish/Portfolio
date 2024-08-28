import React, { useEffect, useState } from "react";

interface TypingTextProp {
  text: string;
  delay: number;
  infinite: boolean;
}

const TypingText: React.FC<TypingTextProp> = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText("");
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, infinite]);

  return <span>{currentText}</span>;
};

export default TypingText;
