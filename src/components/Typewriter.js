import Typewriter from "typewriter-effect";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "FULL Stack Engineer",
            "MERN Stack Engineer",
            "CNC Automated Engineer",
            "Sound Engineer",
            "Computer-Science-Major",
            "Fabricator",
            "Gun-Nut",
            "Raspberry-Pi-Enthusiast",
            "Tinker-er",
            "Husband",
          ],
          autoStart: true,
          loop: true,
          pauseFor: 2500,
        }}
      />
    </>
  );
}
