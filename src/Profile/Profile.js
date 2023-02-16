import React from "react";
import PropTypes from "prop-types";
import pic from './Rholly.png'

const Profile = ({
  fullName, bio, profession, handleName, children
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <img src={pic} alt="Profile" style={{ width: 75 }} />
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  )
}

Profile.defaultProps = {
  fullName: "RHOLLY",
  bio: "Techie",
  profession: "Software-developer",
  handleName: () => alert("OROBOSA")
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Profile;
