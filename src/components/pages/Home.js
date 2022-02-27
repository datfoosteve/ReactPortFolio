import React from "react";
import "../../assets/styles/index.css";
import HomeImage from "../../assets/images/homeimage.jpg";

export default function Home() {
  return (
    <>
      <main className="home__container">
        <h1>Stephen Puthenpurackal</h1>
        <img className="home__card" src={HomeImage} alt="home" />
        <div className="home__text">
          <h2>Welcome to the humble, yet, unfinished, abode.</h2>
        </div>
      </main>
    </>
  );
}
