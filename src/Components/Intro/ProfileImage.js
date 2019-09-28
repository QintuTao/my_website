import React from 'react'
import Selfi from '../../Settings/profile-image.jpg';
import './ProfileImage.scss'

class ProfileImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className="profile-image" src={Selfi} alt="Failed to load my selfi, but you know ---- I'm pretty awesome!"></img>
            </div>
        )
    }
}

export default ProfileImage;
