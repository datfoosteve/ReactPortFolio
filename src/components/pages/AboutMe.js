import React from "react";
import Headshot from "../../assets/images/profile-small.jpg";
import Express from "../../assets/images/react-icon-small.png";

export default function About() {
  return (
    <>
      <main className="about__container">
        <img
          className="about__card"
          src={Headshot}
          height="1080px"
          width="1920px"
          alt="headshot"
        />
        <div className="about__text">
          <p>
            A person. A seemingly normal one. Nothing too special. Maybe a
            little over dramatic. Comes off as a unintentional know it all. The
            difference that individualizes this person, is the desire and
            ambition to achieve and move forward. Wants to be able to sacrifice
            everything, in the pursuit of knowledge. A true tryhard diehard, and
            Wants to be the greatest of those tryhards. Enough to sweat Tsunamis
            type of tryhards. Admires selflessness, and hopefully one day can be
            as great as the people who gives opportunity, rather then being on
            the recieving end.
          </p>
          <p>
            Fabrication, Programming, Carpentry, Metalurgy, Soldering, Welding,
            Engineering, Designing of all forms.
          </p>
          <details>
            <summary>Front-End</summary>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              height="60px"
              width="60px"
              alt="description"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              height="60px"
              width="60px"
              alt="description"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              height="60px"
              width="60px"
              alt="description"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              height="60px"
              width="60px"
              alt="description"
            />
          </details>
          <details>
            <summary>Back-End</summary>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              height="60px"
              width="60px"
              alt="description"
            />
            <img src={Express} alt="description" height="60px" width="60px" />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              height="60px"
              width="60px"
              alt="description"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              height="60px"
              width="60px"
              alt="description"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
              height="60px"
              width="60px"
              alt="description"
            />
          </details>
        </div>
        {/* <div>
          <a
            className="about__text"
            href={
              "https://docs.google.com/document/d/14jv51lQsV4KxF0zR1CGyhtR9aA9X87FTYD_PapEazn8/edit?usp=sharing"
            }
          >
            Resume
          </a>
        </div> */}
      </main>
    </>
  );
}
