import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {

  const fullText = "Hi, I'm Hanif Nur Fadlilah";
  const highlightText = "Hanif Nur Fadlilah"; 
  const highlightStart = fullText.indexOf(highlightText);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); // 100ms per karakter

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      {displayedText.split("").map((char, index) => (
        <span
          key={index}
          className={
            index >= highlightStart
              ? "text-primary"
              : ""
          }
        >
          {char}
        </span>
      ))}
      <span className="animate-pulse">|</span>
    </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I design and develop amazing web experiences with the latest technologies, focusing on the front-end to create elegant and effective user interfaces.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
