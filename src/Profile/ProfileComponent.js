import React from 'react'
import propTypes from 'prop-types'

const ProfileComponent = (props) => {

    const {fullName, bio, profession, handleName} = props.data
    console.log(typeof(fullName))
    return (
        <div>
            {props.children}<br />
            <strong>Full Name: </strong> {fullName} <br />
            <strong>Bio: </strong> {bio} <br />
            <strong>Profession: </strong> {profession} <br />
            <button onClick={() => handleName(fullName)}>Click Here</button>
        </div>
    )
}

ProfileComponent.defaultProps = {
    fullName: "........",
    bio: "........",
    profession: "........"
}

ProfileComponent.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func
}

export default ProfileComponent
