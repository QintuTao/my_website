import React from 'react';
import ProfileImage from './ProfileImage.js';
import './Profile.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProfileImage />
            </div>
        )
    }
}

export default Profile;