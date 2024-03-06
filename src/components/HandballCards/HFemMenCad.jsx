import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import CardFlip from "react-card-flip";
import Hfem from "../../../public/Hfemenino.jpg";

export default function HFemMay() {
  const [isFlipped, setIsFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(2000px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* Front of the card */}
      <animated.div
        className="card"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
        onClick={handleCardFlip}
      >
        <div className="card-content h-80 w-80">
          <Image src={Hfem} alt="Handball Femenino" className="h-full w-full object-cover rounded-xl" />
        </div>
      </animated.div>

      {/* Back of the card */}
      <animated.div
        className="card h-80 w-80 text-center items-center text-blue-800 border-4 border-blue-700 rounded-xl"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
        }}
        onClick={handleCardFlip}
      >
        <div className="card-content h-full w-full">
          <h1 className="text-2xl mb-4 mt-12">Menores y Cadetes Femenino</h1>
          <h2 className="text-xl mb-4">Martes y Jueves</h2>
          <h2 className="text-xl mb-4">20hs a 21hs</h2>
          <h3 className="text-lg">Profesores</h3>
          <h3 className="text-lg">Jara Evangelina</h3>
          <h3 className="text-lg">Nicolas Mennichelli</h3>
        </div>
      </animated.div>
    </CardFlip>
  );
}