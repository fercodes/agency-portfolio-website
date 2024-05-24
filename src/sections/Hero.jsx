import { useState, useEffect } from "react";
import { background } from "../assets/images";

const Hero = () => {
  const [text, setText] = useState("¿Querés calidad?");
  const [subText, setSubText] = useState("Aquí la encontraste");
  const [color, setColor] = useState("text-black");
  const [showWeCreate, setShowWeCreate] = useState(false);

  useEffect(() => {
    const phrases = [
      { text: "websites", color: "text-cool-blue" },
      { text: "content for your business", color: "text-cool-green" },
      { text: "design", color: "text-cool-red" },
      { text: "amazing photography", color: "text-cool-yellow" },
    ];

    let phraseIndex = 0;

    const changeText = () => {
      setText("Imagintree");
      setShowWeCreate(true); // Show "We create"
      setSubText(phrases[phraseIndex].text);
      setColor(phrases[phraseIndex].color);

      const interval = setInterval(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setSubText(phrases[phraseIndex].text);
        setColor(phrases[phraseIndex].color);
      }, 2000);

      return () => clearInterval(interval);
    };

    const initialTimer = setTimeout(changeText, 2500);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 bg-cover bg-center bg-no-repeat"
      style={{ background: `url(${background})`, backgroundSize: "contain" }}
    >
      <div className="relative flex w-full items-start justify-center pt-28">
        <p className="justify-center font-montserrat text-xl">{text}</p>
      </div>
      <div className="relative flex w-full items-start justify-center">
        {!showWeCreate ? (
          <p className="justify-center font-montserrat text-xl">{subText}</p>
        ) : (
          <p className="justify-center font-montserrat text-xl">
            We create <span className={`${color}`}>{subText}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
