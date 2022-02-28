import React from "react";
import "../../assets/styles/index.css";
import HomeImage from "../../assets/images/homeimage.jpg";

export default function Home() {
  return (
    <>
      <main className="home__container">
        <img className="home__card" src={HomeImage} alt="home" />
        <div className="home__text">
          <p>My name is Stephen Puthenpurackal</p>
          <p>Welcome to the humble abode!</p>
        </div>
      </main>
    </>
  );
}
