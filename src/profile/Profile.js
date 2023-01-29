import React from "react";
import './Profile.css' ;
import PropTypes from 'prop-types'; 

const Profile = ({ fullName, bio, profession, children, alertMe }) => {
  return (
    <div className="profil">
      <div className="child1"> {children} </div>
      <div className="child2">
        <h1> Name:{fullName} </h1>
        <h3> Profession:{profession}</h3>
        <h4>Bio:{bio} </h4>
        <button onClick={() => alertMe(fullName)}>alert</button>
      </div>
    </div>
  );
};

Profile.defaultProps = { fullName :'No person' ,
                        bio : 'Dont  exist' ,
                        profession : 'Unkown' , }

Profile.propTypes = {fullName:PropTypes.string}
Profile.propTypes = {bio:PropTypes.string}
Profile.propTypes = {profession:PropTypes.string}

export default Profile;
