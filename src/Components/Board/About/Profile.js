import React from 'react';
import Title from '../../Title/Title';
import ProgressBar from "./ProgressBar/ProgressBar";
import './Profile.scss';
import photo from "../../../Settings/profile-image.jpg";

const Profile = (props) => {
    return (
        <div className="profile" id="ABOUT ME">
            <Title field="about" />
            <div className="about-container">

                <img src={photo} className="photo" alt="my_photo"></img>
                <p className="myself">Hello. Nice to meet you! My name is Quinn. I'm currently studying first year Science at Univeristy of British Columbia! Being enthusiastic about programming, i'm planning to study Computer Science from second year. I am also a photography lover. Here on this website, you can find more about me, the things I love and my projects! </p>

                {/* Not implemented for now */}
                {/* <div className="progress-bar-container">
                    <ProgressBar title="Programming" description="hello world" progress={50} />
                    <ProgressBar title="Programming" description="hello world" progress={50} />
                    <ProgressBar title="Programming" description="hello world" progress={50} />
                    <ProgressBar title="Programming" description="hello world" progress={50} />
                </div> */}

            </div>
        </div>
    )
}

export default Profile;