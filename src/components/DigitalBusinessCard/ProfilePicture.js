import React from "react";
import profilePicture from "../../images/profile-small.jpg";

export default function ProfilePicture() {
  return (
    <>
      <img className="profilePicture" src={profilePicture} alt="profilePicture">
        {" "}
      </img>
    </>
  );
}